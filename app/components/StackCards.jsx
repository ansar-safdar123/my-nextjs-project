import Image from "next/image";
import React from "react";

const StackCards = ({isScattered,isStackVisible}) => {
  return (
    <>
      {/* Stacked images - center ke upar show honge */}
      {!isScattered && (
        <>
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-3ll duration-500 ease-out sm:w-[185px] z-[47] w-[145px]  h-[200px] lg:-mt-24 md:h-[490px] ${
              isStackVisible ? "-top-3 md:-top-12" : "- md:top-0 top-4  "
            }`}
          >
            <Image
              src="/images/landingPage/openPacks/pokemon1.png"
              alt="pokemon"
              width={300}
              height={300}
              className="object-contain md:mt-16"
            />
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-100 ease-out sm:w-[195px] w-[145px] z-[46] h-[200px] lg:-mt-24 md:h-[490px]  ${
              isStackVisible ? "-top-4 md:-top-16" : "- md:top-0 top-4 "
            }`}
          >
            <Image
              src="/images/landingPage/openPacks/pokemon1.png"
              alt="pokemon"
              width={300}
              height={300}
              className="object-contain md:mt-16"
            />
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-200 ease-out sm:w-[190px] w-[145px] z-[45] h-[200px] lg:-mt-24 md:h-[490px]  ${
              isStackVisible ? "-top-6 md:-top-20" : " md:top-0 top-4"
            }`}
          >
            <Image
              src="/images/landingPage/openPacks/pokemon1.png"
              alt="pokemon"
              width={300}
              height={300}
              className="object-contain md:mt-16"
            />
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-300 ease-out sm:w-[185px] w-[145px] z-[44] h-[200px] lg:-mt-24 md:h-[490px]  ${
              isStackVisible ? "-top-8 md:-top-24" : " md:top-0 top-4"
            }`}
          >
            <Image
              src="/images/landingPage/openPacks/pokemon1.png"
              alt="pokemon"
              width={300}
              height={300}
              className="object-contain md:mt-16"
            />
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-[400ms] ease-out sm:w-[180px] w-[145px] z-[43] h-[200px] lg:-mt-24 md:h-[490px]  ${
              isStackVisible ? "-top-10 md:-top-28" : " md:top-0 top-4"
            }`}
          >
            <Image
              src="/images/landingPage/openPacks/pokemon1.png"
              alt="pokemon"
              width={300}
              height={300}
              className="object-contain md:mt-16"
            />
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-500 ease-out sm:w-[175px] w-[145px] z-[42] h-[200px] lg:-mt-24 md:h-[490px] ${
              isStackVisible ? " -top-12 md:-top-32" : " md:top-0 top-4"
            }`}
          >
            <Image
              src="/images/landingPage/openPacks/pokemon1.png"
              alt="pokemon"
              width={300}
              height={300}
              className="object-contain md:mt-16"
            />
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-[600ms] ease-out sm:w-[170px] w-[145px] z-[41] h-[200px] lg:-mt-24 md:h-[490px]  ${
              isStackVisible ? "-top-9 md:-top-36" : " md:top-0 top-4"
            }`}
          >
            <Image
              src="/images/landingPage/openPacks/pokemon1.png"
              alt="pokemon"
              width={300}
              height={300}
              className="object-contain md:mt-16"
            />
          </div>
        </>
      )}
    </>
  );
};

export default StackCards;
