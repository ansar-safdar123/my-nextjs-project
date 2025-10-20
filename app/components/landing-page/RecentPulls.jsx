import Image from "next/image";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function RecentPullsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const recentPullsRef = useRef(null);
  
  // 1. Control the animation using the inView state
  const isInView = useInView(recentPullsRef, {
    once: false, // Set to true so the animation only plays once
    margin: "-100px 0px", // Trigger when 100px from the bottom of the viewport
  });

  // Sample card images (kept for context)
  const cards = [
    // ... your image paths
    "/images/landingPage/recentPulls/1.png",
    "/images/landingPage/recentPulls/2.png",
    "/images/landingPage/recentPulls/3.png",
    "/images/landingPage/recentPulls/4.png",
    "/images/landingPage/recentPulls/6.png",
    "/images/landingPage/recentPulls/7.png",
    "/images/landingPage/recentPulls/8.png",
    "/images/landingPage/recentPulls/9.png",
    "/images/landingPage/recentPulls/10.png",
  ];
  const duplicatedCards = [...cards, ...cards, ...cards];

  // 2. Define the animation variants for the "scroll-up" effect
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start 50px below and invisible
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, // Adjust duration for a beautiful transition
        ease: "easeOut",
        when: "beforeChildren", // Optional: Animate container before children
        staggerChildren: 0.1, // Optional: Stagger the appearance of internal elements
      } 
    },
  };

  return (
    // 3. Attach the ref to the outer container for tracking visibility
    // 4. Use motion.div and apply the variants and controls
    <div className="recent-pulls-bg !z-0">

    <motion.div
      ref={recentPullsRef}
      className=" md:min-h-screen "
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate based on inView status
    >
      <div className="flex flex-col items-center justify-center overflow-hidden">
        
        {/* Title (You can also apply staggered animation here if desired) */}
        <motion.h1 
          className="text-4xl md:text-9xl my-10 md:my-28 font-fjalia font-bold text-white tracking-wider bg-reflect-text " 
          data-text="RECENT PULLS"
        >
          RECENT PULLS
        </motion.h1>

        {/* Slider Container */}
        <div className="relative w-full mb-20 z-40 md:mb-32">
          <div
            className="flex gap-2"
            style={{
              width: "fit-content",
              animation: isPaused ? "none" : "slide 25s linear infinite",
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 group cursor-pointer transition-all duration-500 ease-in-out hover:z-[999]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Image
                  src={card}
                  alt={`Card ${index + 1}`}
                  width={300}
                  height={300}
                  quality={100}
                  className="w-32 sm:w-48 sm:h-64 rounded-lg shadow-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:-rotate-6"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Global CSS for animation (kept for context) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333%); }
              }
            `,
          }}
        />
      </div>
    </motion.div>
    </div>
  );
}