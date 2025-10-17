import Image from "next/image";
import React, { useState, useEffect } from "react";

const Back = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [centerFlipped, setCenterFlipped] = useState(false);
  const [showCenterFlip, setShowCenterFlip] = useState(false);
  const [imagesMoving, setImagesMoving] = useState(false);
  const [imagesInCorners, setImagesInCorners] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    // Initial load animation
    setHasAnimated(true);
    
  }, []);

  useEffect(() => {
    if (imagesMoving && !imagesInCorners) {
      // Wait for images to reach corners
      const moveTimer = setTimeout(() => {
        setImagesInCorners(true);
        setShowCenterFlip(true);
      }, 800);
      return () => clearTimeout(moveTimer);
    }

    if (imagesInCorners && showCenterFlip) {
      // Keep images in corners for 5 seconds
      const holdTimer = setTimeout(() => {
        setShowCenterFlip(false);
        setIsReturning(true);
        // Small delay before starting return animation
        // setTimeout(() => {
          setImagesInCorners(false);
          setImagesMoving(false);
          setIsFlipped(false);
          
          // Trigger shake when images return
          setTimeout(() => {
            setIsShaking(true);
            setIsReturning(false);
          }, 800);
        // }, 0);
      }, 3000);

      return () => clearTimeout(holdTimer);
    }
  }, [imagesMoving, imagesInCorners, showCenterFlip]);

  const handleCenterHover = () => {
    if (!showCenterFlip && !imagesMoving && !imagesInCorners) {
      setIsFlipped(true);
    } else if (imagesInCorners && showCenterFlip) {
      setCenterFlipped(true);
    }
  };

  const handleCenterLeave = () => {
    if (!showCenterFlip && !imagesMoving && !imagesInCorners) {
      setIsFlipped(false);
    } else if (imagesInCorners && showCenterFlip) {
      setCenterFlipped(false);
    }
  };

  // const handleCenterClick = () => {
  //   console.log("object")
  //   if (isFlipped && !showCenterFlip && !imagesMoving) {
  //     setImagesMoving(true);
  //   }
  // };

const handleCenterClick = () => {
  console.log("click is showing ");
  if (isFlipped && !showCenterFlip && !imagesMoving) {
    setImagesMoving(true);

    // immediately trigger visible animation state
    setImagesInCorners(true);
    setShowCenterFlip(true);
  }
};


  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100vw) rotate(-5deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(-5deg);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100vw) rotate(5deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(5deg);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

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

        @keyframes zoomInOut {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
        }

        @keyframes moveToTopLeft {
          0% {
            transform: translate(0, 0) rotate(-7deg);
            filter: blur(0px);
          }
          100% {
            transform: translate(-45vw, -40vh) rotate(17deg);
            filter: blur(4px);
          }
        }

        @keyframes moveToBottomRight {
          0% {
            transform: translate(0, 0) rotate(5deg);
            filter: blur(0px);
          }
          100% {
            transform: translate(45vw, 40vh) rotate(7deg);
            filter: blur(4px);
          }
        }

        @keyframes returnFromTopLeft {
          0% {
            transform: translate(-45vw, -40vh) rotate(-7deg);
            filter: blur(4px);
          }
          100% {
            transform: translate(0, 0) rotate(-5deg);
            filter: blur(0px);
          }
        }

        @keyframes returnFromBottomRight {
          0% {
            transform: translate(45vw, 40vh) rotate(7deg);
            filter: blur(4px);
          }
          100% {
            transform: translate(0, 0) rotate(5deg);
            filter: blur(0px);
          }
        }

        @keyframes shakeVibrate {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translate(-4px, -3px) rotate(-2deg);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translate(4px, 3px) rotate(2deg);
          }
        }

        .flip-to-back {
          animation: flipToBack 0.6s ease-in-out forwards;
        }

        .flip-to-front {
          animation: flipToFront 0.6s ease-in-out forwards;
        }

        .continuous-flip {
          animation: continuousFlip 2s ease-in-out infinite;
        }

        .move-to-top-left {
          animation: moveToTopLeft 0.8s ease-in-out forwards;
        }

        .move-to-bottom-right {
          animation: moveToBottomRight 0.8s ease-in-out forwards;
        }

        .hold-top-left {
          transform: translate(-45vw, -40vh) rotate(-7deg);
          filter: blur(4px);
        }

        .hold-bottom-right {
          transform: translate(45vw, 40vh) rotate(7deg);
          filter: blur(4px);
        }

        .return-from-top-left {
          animation: returnFromTopLeft 0.8s ease-in-out forwards;
        }

        .return-from-bottom-right {
          animation: returnFromBottomRight 0.8s ease-in-out forwards;
        }

        @keyframes shakeLeftRight {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-8px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(8px);
          }
        }

        .slide-in-left {
          animation: slideInFromLeft 1s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInFromRight 1s ease-out forwards;
        }

        .slide-in-bottom {
          animation: slideInFromBottom 1s ease-out forwards;
        }

        .zoom-shake-effect {
          animation: zoomInOut 0.8s ease-in-out;
        }

        .shake-left-right-effect {
          animation: shakeLeftRight 0.8s ease-in-out;
        }
      `}</style>

      <div className="flex custom-h px-3 sm:px-7 md:px-20 flex-row -space-x-10 sm:-space-x-8 md:-space-x-6 justify-center relative">
        {/* Left Image */}
        <div
          className={`sm:w-[170px] w-[130px] transition-all duration-300 sm:-rotate-[5deg] h-[200px] mt-7 sm:mt-0 md:h-[300px] ${
            !hasAnimated ? "opacity-0" : ""
          } ${hasAnimated && !imagesMoving && !imagesInCorners && !isReturning ? "slide-in-left" : ""} ${
            !showCenterFlip && !imagesMoving && !imagesInCorners
              ? "hover:-rotate-7 hover:-translate-x-5 blur-[2px] hover:blur-[0]"
              : ""
          } ${imagesMoving && !imagesInCorners ? "move-to-top-left" : ""} ${
            imagesInCorners && showCenterFlip ? "hold-top-left" : ""
          } ${
            isReturning && !imagesInCorners ? "return-from-top-left" : ""
          } ${isShaking ? "shake-left-right-effect" : ""}`}
        >
          <Image
            src="/images/landingPage/openPacks/lorkana.png"
            alt="lorkana"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Center Image - Only visible when left/right are NOT in corners */}
        {!imagesInCorners && (
          <div
            className={`relative sm:w-[200px] w-[150px] z-10 h-[300px] lg:-mt-24 md:h-[490px] cursor-pointer ${
              !hasAnimated ? "opacity-0" : ""
            } ${hasAnimated && !imagesMoving && !isReturning ? "slide-in-bottom" : ""} ${
              isShaking ? "zoom-shake-effect" : ""
            }`}
            onMouseEnter={handleCenterHover}
            onMouseLeave={handleCenterLeave}
            onClick={handleCenterClick}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front - Pokemon */}
            <div
              className={`absolute inset-0 ${
                isFlipped ? "flip-to-back" : "flip-to-front"
              }`}
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
              }`}
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
          </div>
        )}

        {/* Center Flipping Image - Shows when left/right are in corners */}
        {imagesInCorners && showCenterFlip && (
          <div
            className="relative sm:w-[200px] w-[150px] z-10 h-[300px] lg:-mt-24 md:h-[490px]"
            style={{ transformStyle: "preserve-3d" }}
            // onMouseEnter={handleCenterHover}
            // onMouseLeave={handleCenterLeave}
          >
            {/* Front - Pokemon */}
            <div
              className={`absolute inset-0 ${
                centerFlipped ? "flip-to-back" : "flip-to-front"
              }`}
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
                centerFlipped ? "flip-to-front" : "flip-to-back"
              }`}
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
          </div>
        )}

        {/* Right Image */}
        <div
          className={`sm:w-[170px] w-[130px] transition-all duration-300 mt-7 sm:mt-0 sm:rotate-[5deg] h-[200px] md:h-[300px] ${
            !hasAnimated ? "opacity-0" : ""
          } ${hasAnimated && !imagesMoving && !imagesInCorners && !isReturning ? "slide-in-right" : ""} ${
            !showCenterFlip && !imagesMoving && !imagesInCorners
              ? "hover:rotate-7 hover:translate-x-5 blur-[2px] hover:blur-[0]"
              : ""
          } ${imagesMoving && !imagesInCorners ? "move-to-bottom-right" : ""} ${
            imagesInCorners && showCenterFlip ? "hold-bottom-right" : ""
          } ${
            isReturning && !imagesInCorners ? "return-from-bottom-right" : ""
          } ${isShaking ? "shake-left-right-effect" : ""}`}
        >
          <Image
            src="/images/landingPage/openPacks/collector.png"
            alt="collector"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Back;