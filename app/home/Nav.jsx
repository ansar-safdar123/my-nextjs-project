



'use client';
import React, { useEffect, useRef, useState } from "react";
import "./nav.css";

const CircularMenu = ({ onMenuChange, activeIndex = 1 }) => {
  const menuContainerRef = useRef(null);
  const menuRef = useRef(null);
 

  // useEffect(() => {
  //   const menuContainer = menuContainerRef.current;
  //   const menu = menuRef.current;

  //   // Measure total menu width
  //   const itemWidths = Array.from(menu.children).map(
  //     (item) => item.offsetWidth
  //   );
  //   const menuWidth = itemWidths.reduce((a, b) => a + b, 0);

  //   // Clone menu items for seamless circular effect
  //   const clonesNeeded = Math.ceil(window.innerWidth / menuWidth) + 3;
  //   for (let i = 0; i < clonesNeeded; i++) {
  //     menuItems.forEach((label, index) => {
  //       const clone = document.createElement("div");
  //       clone.className = "menu-item";
  //       clone.dataset.index = index;
  //       clone.textContent = label;
  //       menu.appendChild(clone);
  //     });
  //   }

  //   const allItems = menu.querySelectorAll(".menu-item");

  //   // Center item helper
  //   const centerItem = (item, behavior = "auto") => {
  //     const containerWidth = menuContainer.offsetWidth;
  //     const itemWidth = item.offsetWidth;
  //     const itemLeft = item.offsetLeft;
  //     const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;
  //     menuContainer.scrollTo({ left: scrollPosition, behavior });
  //   };

  //   // Click event for items
  //   allItems.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       const index = Number(item.dataset.index);
  //       allItems.forEach((i) => i.classList.remove("active"));
  //       item.classList.add("active");
  //       centerItem(item, "smooth");
  //       if (onMenuChange) {
  //         onMenuChange(index);
  //       }
  //     });
  //   });

  //   // Infinite scroll loop
  //   menuContainer.addEventListener("scroll", () => {
  //     const scrollLeft = menuContainer.scrollLeft;
  //     if (scrollLeft >= menuWidth * (clonesNeeded - 1)) {
  //       menuContainer.scrollLeft = scrollLeft - menuWidth;
  //     } else if (scrollLeft <= 0) {
  //       menuContainer.scrollLeft = scrollLeft + menuWidth;
  //     }
  //   });

  //   // Initialize with correct item centered
  //   setTimeout(() => {
  //     const all = Array.from(allItems);
  //     const targetItems = all.filter((i) => Number(i.dataset.index) === activeIndex);
      
  //     if (targetItems.length > 0) {
  //       all.forEach((i) => i.classList.remove("active"));
  //       targetItems[0].classList.add("active");
  //       centerItem(targetItems[0], "auto");
  //     }
  //   }, 300);
  // }, [menuItems, activeIndex, onMenuChange]);




 
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
    const singleSetWidth = allItems.slice(0, menuItems.length).reduce((sum, el) => sum + el.offsetWidth, 0);

    // Smart centering - shortest path
    const centerItem = (item, behavior = "smooth") => {
      const containerWidth = menuContainer.offsetWidth;
      const itemWidth = item.offsetWidth;
      const itemLeft = item.offsetLeft;
      const targetScroll = itemLeft - containerWidth / 2 + itemWidth / 2;
      const currentScroll = menuContainer.scrollLeft;

      // Calculate both possible paths
      const directDiff = targetScroll - currentScroll;
      const wrappedDiff = directDiff > 0 ? directDiff - singleSetWidth : directDiff + singleSetWidth;

      // Choose shortest path
      const finalScroll = Math.abs(directDiff) < Math.abs(wrappedDiff)
        ? targetScroll
        : currentScroll + wrappedDiff;

      menuContainer.scrollTo({ left: finalScroll, behavior });
    };

    // Click handling
    let isClicking = false;
    
    allItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (isClicking) return;
        isClicking = true;
        
        const clickedIndex = Number(item.dataset.index);
        
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

    // Initialize - center the active item from middle set
    setTimeout(() => {
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