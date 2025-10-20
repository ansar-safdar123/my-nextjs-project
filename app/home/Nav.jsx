


'use client';
import React, { useEffect, useRef, useState } from "react";
import "./nav.css";

const CircularMenu = ({ onMenuChange, activeIndex = 1 }) => {
  const menuContainerRef = useRef(null);
  const menuRef = useRef(null);
  const currentActiveIndexRef = useRef(activeIndex);
 
  const [menuItems] = useState([
    "Withdraw",
    "Open Packs",
    "Sell Cards",
    "Buy Cards",
    "Collect",
    "Sellback"
  ]);
  
  useEffect(() => {
    const menuContainer = menuContainerRef.current;
    const menu = menuRef.current;
    menu.innerHTML = ""; // Clear existing content

    // Create clones: [before] + [main] + [after]
    const createItems = (items, offset = 0) => {
      items.forEach((label, index) => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.dataset.index = index;
        div.dataset.offset = offset;
        div.textContent = label;
        menu.appendChild(div);
      });
    };

    createItems(menuItems, -menuItems.length);
    createItems(menuItems, 0);
    createItems(menuItems, menuItems.length);

    const allItems = Array.from(menu.querySelectorAll(".menu-item"));
    
    const getSingleSetWidth = () => {
      return allItems.slice(0, menuItems.length).reduce((sum, el) => sum + el.offsetWidth, 0);
    };

    // Smart centering - shortest path
    const centerItem = (item, behavior = "smooth") => {
      const containerWidth = menuContainer.offsetWidth;
      const itemWidth = item.offsetWidth;
      const itemLeft = item.offsetLeft;
      const targetScroll = itemLeft - containerWidth / 2 + itemWidth / 2;
      const currentScroll = menuContainer.scrollLeft;
      const singleSetWidth = getSingleSetWidth();

      // Calculate both possible paths
      const directDiff = targetScroll - currentScroll;
      const wrappedDiff = directDiff > 0 ? directDiff - singleSetWidth : directDiff + singleSetWidth;

      // Choose shortest path
      const finalScroll = Math.abs(directDiff) < Math.abs(wrappedDiff)
        ? targetScroll
        : currentScroll + wrappedDiff;

      menuContainer.scrollTo({ left: finalScroll, behavior });
    };

    // Function to recenter active item
    const recenterActiveItem = () => {
      const middleSetStartIndex = menuItems.length;
      const targetIndex = middleSetStartIndex + currentActiveIndexRef.current;
      const target = allItems[targetIndex];
      
      if (target) {
        isRepositioning = true;
        menuContainer.style.scrollBehavior = 'auto';
        centerItem(target, "auto");
        requestAnimationFrame(() => {
          menuContainer.style.scrollBehavior = 'smooth';
          isRepositioning = false;
        });
      }
    };

    // Click handling
    let isClicking = false;
    
    allItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (isClicking) return;
        isClicking = true;
        
        const clickedIndex = Number(item.dataset.index);
        currentActiveIndexRef.current = clickedIndex;
        
        // Update active state on all matching items
        allItems.forEach((i) => {
          if (Number(i.dataset.index) === clickedIndex) {
            i.classList.add("active");
          } else {
            i.classList.remove("active");
          }
        });

        // Disable scroll handler during centering
        isRepositioning = true;
        centerItem(item, "smooth");
        
        // Re-enable after animation
        setTimeout(() => {
          isRepositioning = false;
          isClicking = false;
        }, 700);

        // Trigger callback
        if (onMenuChange) {
          onMenuChange(clickedIndex);
        }
      });
    });

    // Infinite scroll loop (invisible repositioning)
    let isRepositioning = false;
    let scrollTimeout;
    
    const handleScroll = () => {
      if (isRepositioning) return;
      
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const { scrollLeft } = menuContainer;
        const singleSetWidth = getSingleSetWidth();
        
        // If scrolled too far left, jump to middle set
        if (scrollLeft <= singleSetWidth * 0.2) {
          isRepositioning = true;
          menuContainer.style.scrollBehavior = 'auto';
          menuContainer.scrollLeft = scrollLeft + singleSetWidth;
          requestAnimationFrame(() => {
            menuContainer.style.scrollBehavior = 'smooth';
            isRepositioning = false;
          });
        } 
        // If scrolled too far right, jump to middle set
        else if (scrollLeft >= singleSetWidth * 1.8) {
          isRepositioning = true;
          menuContainer.style.scrollBehavior = 'auto';
          menuContainer.scrollLeft = scrollLeft - singleSetWidth;
          requestAnimationFrame(() => {
            menuContainer.style.scrollBehavior = 'smooth';
            isRepositioning = false;
          });
        }
      }, 100);
    };

    menuContainer.addEventListener("scroll", handleScroll, { passive: true });

    // Handle window resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        recenterActiveItem();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    // Initialize - center the active item from middle set
    setTimeout(() => {
      currentActiveIndexRef.current = activeIndex;
      const middleSetStartIndex = menuItems.length;
      const targetIndex = middleSetStartIndex + activeIndex;
      const target = allItems[targetIndex];
      
      if (target) {
        allItems.forEach((i) => {
          if (Number(i.dataset.index) === activeIndex) {
            i.classList.add("active");
          } else {
            i.classList.remove("active");
          }
        });
        centerItem(target, "auto");
      }
    }, 100);

    // Drag to scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - menuContainer.offsetLeft;
      scrollLeft = menuContainer.scrollLeft;
      menuContainer.classList.add("dragging");
      menuContainer.style.scrollBehavior = "auto";
    };

    const handleMouseLeave = () => {
      isDown = false;
      menuContainer.classList.remove("dragging");
      menuContainer.style.scrollBehavior = "smooth";
    };

    const handleMouseUp = () => {
      isDown = false;
      menuContainer.classList.remove("dragging");
      menuContainer.style.scrollBehavior = "smooth";
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - menuContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      menuContainer.scrollLeft = scrollLeft - walk;
    };

    menuContainer.addEventListener("mousedown", handleMouseDown);
    menuContainer.addEventListener("mouseleave", handleMouseLeave);
    menuContainer.addEventListener("mouseup", handleMouseUp);
    menuContainer.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      menuContainer.removeEventListener("scroll", handleScroll);
      menuContainer.removeEventListener("mousedown", handleMouseDown);
      menuContainer.removeEventListener("mouseleave", handleMouseLeave);
      menuContainer.removeEventListener("mouseup", handleMouseUp);
      menuContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [menuItems, activeIndex, onMenuChange]);

  return (
    <div className="menu-container" ref={menuContainerRef}>
      <div className="menu" ref={menuRef}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${activeIndex === index ? "active" : ""}`}
            data-index={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularMenu;