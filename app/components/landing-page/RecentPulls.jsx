import Image from "next/image";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function RecentPullsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const recentPullsRef = useRef(null);
  const isInView = useInView(recentPullsRef, {
    once: false, // Animation happens only once
    margin: "-100px", // Triggers when element is 100px from viewport
  });

  // Sample card images - replace with your actual images
  const cards = [
    "/images/landingPage/recentPulls/1.png",
    "/images/landingPage/recentPulls/2.png",
    "/images/landingPage/recentPulls/3.png",
    "/images/landingPage/recentPulls/4.png",
    // '/images/landingPage/recentPulls/5.png',
    "/images/landingPage/recentPulls/6.png",
    "/images/landingPage/recentPulls/7.png",
    "/images/landingPage/recentPulls/8.png",
    "/images/landingPage/recentPulls/9.png",
    "/images/landingPage/recentPulls/10.png",
  ];

  // Duplicate cards for seamless infinite loop
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <div className="home !z-0">
      <motion.div
        ref={recentPullsRef}
        initial={{ opacity: 0, y: 300 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1], // Smooth easing curve
        }}
      >
        <div className=" flex flex-col items-center  justify-center overflow-hidden">
          {/* Title */}
          <h1
  className="text-4xl md:text-9xl my-10 md:my-28 font-fjalia font-bold text-white tracking-wider bg-reflect-text "
  data-text="RECENT PULLS"
>
  RECENT PULLS
</h1>

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
                    width={800}
                    height={800}
                    quality={100}
                    className="w-48 h-64 rounded-lg shadow-2xl object-cover transition-all duration-500 ease-in-out 
      group-hover:scale-125 group-hover:-rotate-6"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Global CSS for animation */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
