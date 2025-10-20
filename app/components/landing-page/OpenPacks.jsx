import Image from "next/image";
import React, { useState, useEffect } from "react";
import StackCards from "../StackCards";
import ScatteredCards from "./ScatteredCards";

const Pack = () => {
  const [isStackVisible, setIsStackVisible] = useState(false);
  const [isScattered, setIsScattered] = useState(false);

  useEffect(() => {
    if (isStackVisible && !isScattered) {
      const timer = setTimeout(() => {
        setIsScattered(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isStackVisible, isScattered]);

  const handleClick = () => {
    if (!isStackVisible && !isScattered) {
      setIsStackVisible(true);
      
    } else {
      setIsStackVisible(false);
      setIsScattered(false);
    }
  };

  // Scattered cards - puri screen pe different positions with varied sizes

  return (
    <>
      <div className="relative flex custom-h px-3 sm:px-7 md:px-20 flex-row -space-x-10 sm:-space-x-8 md:-space-x-6 justify-center">
        {/* Scattered Cards - component ke andar hi rahenge */}
        <ScatteredCards isScattered={isScattered} />

        {/* Left Card */}
        <div
          className="sm:w-[170px] w-[130px] hover:-rotate-7 hover:-translate-x-5 transition-all duration-300 sm:-rotate-[5deg] blur-[2px] hover:blur-[0] h-[200] mt-7 sm:mt-0 md:h-[300px]"
          style={{
            opacity: isScattered ? 0 : 1,
            transform: isScattered
              ? "translateX(-300px) scale(0.8) rotate(-30deg)"
              : "translateX(0) rotate(-5deg)",
            transition: "all 1s ease-out",
            pointerEvents: isScattered ? "none" : "auto",
          }}
        >
          <Image
            src="/images/landingPage/openPacks/lorkana.png"
            alt="lorkana"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>

        {/* Center Card Group */}
        <div className="relative group">
          {/* Stacked images - center ke upar show honge */}
          <StackCards
            isScattered={isScattered}
            isStackVisible={isStackVisible}
          />

          {/* Center image - Main Pack */}
          <div
            className={`relative sm:w-[200px] w-[150px] z-50 h-[300px] lg:-mt-8 md:h-[500px] cursor-pointer ${
              isScattered ? "float-animation" : ""
            }`}
            onClick={handleClick}
          >
            <Image
              src="/images/landingPage/openPacks/pokemon.png"
              alt="pokemon"
              width={300}
              height={300}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Card */}
        <div
          className="sm:w-[170px] w-[130px] hover:rotate-7 hover:translate-x-5 transition-all duration-300 mt-7 sm:mt-0 sm:rotate-[5deg] blur-[2px] hover:blur-[0] h-[200] md:h-[300px]"
          style={{
            opacity: isScattered ? 0 : 1,
            transform: isScattered
              ? "translateX(300px) scale(0.8) rotate(30deg)"
              : "translateX(0) rotate(5deg)",
            transition: "all 1s ease-out",
            pointerEvents: isScattered ? "none" : "auto",
          }}
        >
          <Image
            src="/images/landingPage/openPacks/collector.png"
            alt="collector"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Pack;
