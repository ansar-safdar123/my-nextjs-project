// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// const Back = () => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [showBalance, setShowBalance] = useState(false);
//   const [imagesHidden, setImagesHidden] = useState(false);

//   useEffect(() => {
//     if (showBalance) {
//       const timer = setTimeout(() => {
//         setShowBalance(false);
//         setImagesHidden(false);
//         setIsFlipped(false);
//       }, 10000);

//       return () => clearTimeout(timer);
//     }
//   }, [showBalance]);

//   const handleCenterHover = () => {
//     if (!showBalance) {
//       setIsFlipped(true);
//     }
//   };

//   const handleCenterLeave = () => {
//     if (!showBalance) {
//       setIsFlipped(false);
//     }
//   };

//   const handleCenterClick = () => {
//     if (isFlipped && !showBalance) {
//       setImagesHidden(true);
//       setTimeout(() => {
//         setShowBalance(true);
//       }, 6000);
//     }
//   };

//   return (
//     <>
//       <style jsx>{`
//         @keyframes flipToBack {
//           0% {
//             transform: perspective(1000px) rotateY(0deg);
//           }
//           100% {
//             transform: perspective(1000px) rotateY(180deg);
//           }
//         }

//         @keyframes flipToFront {
//           0% {
//             transform: perspective(1000px) rotateY(-180deg);
//           }
//           100% {
//             transform: perspective(1000px) rotateY(0deg);
//           }
//         }

//         @keyframes moveTopLeft {
//           0% {
//             transform: translate(0, 0) rotate(-5deg);
//             opacity: 1;
//           }
//           100% {
//             transform: translate(-500px, -500px) rotate(-5deg);
//             // opacity: 0;
//           }
//         }

//         @keyframes moveBottomRight {
//           0% {
//             transform: translate(0, 0) rotate(5deg);
//             opacity: 1;
//           }
//           100% {
//             transform: translate(100px, 100px) rotate(5deg);
//             // opacity: 0;
//           }
//         }

//         @keyframes fadeOut {
//           0% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//           }
//         }

//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes returnFromTopLeft {
//           0% {
//             transform: translate(-100px, -100px) rotate(-5deg);
//             opacity: 0;
//           }
//           100% {
//             transform: translate(0, 0) rotate(-5deg);
//             opacity: 1;
//           }
//         }

//         @keyframes returnFromBottomRight {
//           0% {
//             transform: translate(100px, 100px) rotate(5deg);
//             opacity: 0;
//           }
//           100% {
//             transform: translate(0, 0) rotate(5deg);
//             opacity: 1;
//           }
//         }

//         .flip-to-back {
//           animation: flipToBack 0.6s ease-in-out forwards;
//         }

//         .flip-to-front {
//           animation: flipToFront 0.6s ease-in-out forwards;
//         }

//         .move-top-left {
//           animation: moveTopLeft 0.6s ease-in-out forwards;
//         }

//         .move-bottom-right {
//           animation: moveBottomRight 0.6s ease-in-out forwards;
//         }

//         .fade-out {
//           animation: fadeOut 0.6s ease-in-out forwards;
//         }

//         .fade-in {
//           animation: fadeIn 0.5s ease-in-out forwards;
//         }

//         .return-top-left {
//           animation: returnFromTopLeft 0.6s ease-in-out forwards;
//         }

//         .return-bottom-right {
//           animation: returnFromBottomRight 0.6s ease-in-out forwards;
//         }
//       `}</style>

//       <div className="flex flex-row -space-x-10 sm:-space-x-8 md:-space-x-6 justify-center relative">
//         {/* Left Image */}
//         <div
//           className={`sm:w-[170px] w-[130px] transition-all duration-300 sm:-rotate-[5deg] h-[200px] mt-7 sm:mt-0 md:h-[300px] ${
//             !showBalance
//               ? "hover:-rotate-7 hover:-translate-x-5 blur-[2px] hover:blur-[0]"
//               : ""
//           } ${imagesHidden && !showBalance ? "move-top-left" : ""} ${
//             !imagesHidden && showBalance ? "return-top-left" : ""
//           }`}
//         >
//           <Image
//             src="/images/landingPage/openPacks/lorkana.png"
//             alt="lorkana"
//             width={300}
//             height={300}
//             className="object-contain"
//           />
//         </div>

//         {/* Center Image - Pokemon/Pokemon1 with flip */}
//         <div
//           className="relative sm:w-[200px] w-[150px] z-10 h-[300px] lg:-mt-24 md:h-[490px] cursor-pointer"
//           onMouseEnter={handleCenterHover}
//           onMouseLeave={handleCenterLeave}
//           onClick={handleCenterClick}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {!showBalance ? (
//             <>
//               {/* Front - Pokemon */}
//               <div
//                 className={`absolute inset-0 ${
//                   isFlipped
//                     ? "flip-to-back"
//                     : !imagesHidden
//                     ? "flip-to-front"
//                     : ""
//                 } ${imagesHidden ? "fade-out" : ""}`}
//                 style={{
//                   backfaceVisibility: "hidden",
//                   transformStyle: "preserve-3d",
//                 }}
//               >
//                 <div className="h-[600px]">
//                   <Image
//                     src="/images/landingPage/sellBack/pokemon1.png"
//                     alt="pokemon"
//                     fill
//                     className="object-contain h-[600px]"
//                   />
//                 </div>
//               </div>

//               {/* Back - Pokemon1 */}
//               <div
//                 className={`absolute inset-0 ${
//                   isFlipped ? "flip-to-front" : "flip-to-back"
//                 } ${imagesHidden ? "fade-out" : ""}`}
//                 style={{
//                   backfaceVisibility: "hidden",
//                   transformStyle: "preserve-3d",
//                   transform: "perspective(1000px) rotateY(180deg)",
//                 }}
//               >
//                 <Image
//                   src="/images/landingPage/openPacks/pokemon.png"
//                   alt="pokemon back"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </>
//           ) : null}
//         </div>

//         {/* Right Image */}
//         <div
//           className={`sm:w-[170px] w-[130px] transition-all duration-300 mt-7 sm:mt-0 sm:rotate-[5deg] h-[200px] md:h-[300px] ${
//             !showBalance
//               ? "hover:rotate-7 hover:translate-x-5 blur-[2px] hover:blur-[0]"
//               : ""
//           } ${imagesHidden && !showBalance ? "move-bottom-right" : ""} ${
//             !imagesHidden && showBalance ? "return-bottom-right" : ""
//           }`}
//         >
//           <Image
//             src="/images/landingPage/openPacks/collector.png"
//             alt="collector"
//             width={300}
//             height={300}
//             className="object-contain"
//           />
//         </div>

//         {/* Credit Balance Display */}
//         {showBalance && (
// <div className="absolute inset-0 flex items-center justify-center z-20 fade-in">
//   <div className=" text-white py-8 rounded-2xl shadow-2xl">
//     <p className="text-sm text-center font-exo font-semibold tracking-wider mb-2">
//       CREDIT BALANCE
//     </p>
//     <p className="text-5xl text-center px-12 rounded-full border font-bold">
//       $600
//     </p>
//   </div>
// </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Back;

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Back = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [imagesHidden, setImagesHidden] = useState(false);

  useEffect(() => {
    if (imagesHidden && !showBalance) {
      const timer = setTimeout(() => {
        setShowBalance(true);
      }, 600);
      return () => clearTimeout(timer);
    }

    if (showBalance) {
      const timer = setTimeout(() => {
        setShowBalance(false);
        setImagesHidden(false);
        setIsFlipped(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showBalance, imagesHidden]);

  const handleCenterHover = () => {
    if (!showBalance) {
      setIsFlipped(true);
    }
  };

  const handleCenterLeave = () => {
    if (!showBalance) {
      setIsFlipped(false);
    }
  };

  const handleCenterClick = () => {
    if (isFlipped && !showBalance) {
      setImagesHidden(true);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes flipToBack {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          100% {
            transform: perspective(1000px) rotateY(180deg);
          }
        }

        @keyframes flipToFront {
          0% {
            transform: perspective(1000px) rotateY(-180deg);
          }
          100% {
            transform: perspective(1000px) rotateY(0deg);
          }
        }

        @keyframes moveTopLeft {
          0% {
            transform: translate(0, 0) rotate(-5deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50vw + 50px), calc(-50vh + 50px))
              rotate(-5deg);
            opacity: 1;
          }
        }

        @keyframes moveBottomRight {
          0% {
            transform: translate(0, 0) rotate(5deg);
            opacity: 1;
          }
          100% {
            transform: translate(calc(50vw - 50px), calc(50vh - 50px))
              rotate(5deg);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes returnFromTopLeft {
          0% {
            transform: translate(calc(-50vw + 50px), calc(-50vh + 50px))
              rotate(-5deg);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) rotate(-5deg);
            opacity: 1;
          }
        }

        @keyframes returnFromBottomRight {
          0% {
            transform: translate(calc(50vw - 50px), calc(50vh - 50px))
              rotate(5deg);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) rotate(5deg);
            opacity: 1;
          }
        }

        .flip-to-back {
          animation: flipToBack 0.6s ease-in-out forwards;
        }

        .flip-to-front {
          animation: flipToFront 0.6s ease-in-out forwards;
        }

        .move-top-left {
          animation: moveTopLeft 0.8s ease-in-out forwards;
        }

        .move-bottom-right {
          animation: moveBottomRight 0.8s ease-in-out forwards;
        }

        .fade-out {
          animation: fadeOut 0.6s ease-in-out forwards;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        .return-top-left {
          animation: returnFromTopLeft 0.8s ease-in-out forwards;
        }

        .return-bottom-right {
          animation: returnFromBottomRight 0.8s ease-in-out forwards;
        }
      `}</style>

      <div className="flex custom-h px-3 sm:px-7 md:px-20 flex-row -space-x-10 sm:-space-x-8 md:-space-x-6 justify-center relative">
        {/* Left Image */}
        <div
          className={`sm:w-[170px] w-[130px] transition-all duration-300 sm:-rotate-[5deg] h-[200px] mt-7 sm:mt-0 md:h-[300px] ${
            !showBalance
              ? "hover:-rotate-7 hover:-translate-x-5 blur-[2px] hover:blur-[0]"
              : ""
          } ${imagesHidden && !showBalance ? "move-top-left" : ""} ${
            !imagesHidden && showBalance ? "return-top-left" : ""
          }`}
        >
          <Image
            src="/images/landingPage/openPacks/lorkana.png"
            alt="lorkana"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Center Image - Pokemon/Pokemon1 with flip */}
        <div
          className="relative sm:w-[200px] w-[150px] z-10 h-[300px] lg:-mt-24 md:h-[490px] cursor-pointer"
          onMouseEnter={handleCenterHover}
          onMouseLeave={handleCenterLeave}
          onClick={handleCenterClick}
          style={{ transformStyle: "preserve-3d" }}
        >
          {!showBalance ? (
            <>
              {/* Front - Pokemon */}
              <div
                className={`absolute inset-0 ${
                  isFlipped
                    ? "flip-to-back"
                    : !imagesHidden
                    ? "flip-to-front"
                    : ""
                } ${imagesHidden ? "fade-out" : ""}`}
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src="/images/landingPage/openPacks/pokemon.png"
                  alt="pokemon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Back - Pokemon1 */}
              <div
                className={`absolute inset-0 ${
                  isFlipped ? "flip-to-front" : "flip-to-back"
                } ${imagesHidden ? "fade-out" : ""}`}
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px) rotateY(180deg)",
                }}
              >
                <Image
                  src="/images/landingPage/sellBack/pokemon1.png"
                  alt="pokemon back"
                  fill
                  className="object-contain"
                />
              </div>
            </>
          ) : null}
        </div>

        {/* Right Image */}
        <div
          className={`sm:w-[170px] w-[130px] transition-all duration-300 mt-7 sm:mt-0 sm:rotate-[5deg] h-[200px] md:h-[300px] ${
            !showBalance
              ? "hover:rotate-7 hover:translate-x-5 blur-[2px] hover:blur-[0]"
              : ""
          } ${imagesHidden && !showBalance ? "move-bottom-right" : ""} ${
            !imagesHidden && showBalance ? "return-bottom-right" : ""
          }`}
        >
          <Image
            src="/images/landingPage/openPacks/collector.png"
            alt="collector"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Credit Balance Display */}
        {showBalance && (
          <div className="absolute inset-0 flex items-center justify-center z-20 fade-in">
            <div className=" text-white py-8 rounded-2xl shadow-2xl">
              <p className="text-sm text-center font-exo font-semibold tracking-wider mb-2">
                CREDIT BALANCE
              </p>
              <p className="text-5xl text-center px-12 rounded-full border font-bold">
                $600
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Back;
