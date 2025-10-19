
import React, { useState, useEffect } from "react";

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
      // setTimeout(()=>{
      // setIsStackVisible(true);

      // },1000)
    } else {
      setIsStackVisible(false);
      setIsScattered(false);
    }
  };

  // Scattered cards - puri screen pe different positions with varied sizes
  const scatteredCards = [
    { 
      id: 1, 
      img: "/images/landingPage/openPacks/pokemon1.png",
      width: "w-32 sm:w-40 md:w-52 lg:w-64",
      height: "h-48 sm:h-60 md:h-72 lg:h-88",
      position: "left-[3%] top-[5%]",
      rotation: "rotate-[-15deg]"
    },
    { 
      id: 2, 
      img: "/images/landingPage/openPacks/pokemon1.png",
      width: "w-40 sm:w-52 md:w-64 lg:w-80",
      height: "h-56 sm:h-72 md:h-88 lg:h-[120px]",
      position: "right-[5%] top-[8%]",
      rotation: "rotate-[18deg] blur-[51px]"
    },
    { 
      id: 3, 
      img: "/images/landingPage/openPacks/pokemon1.png",
      width: "w-28 sm:w-36 md:w-44 lg:w-56",
      height: "h-40 sm:h-52 md:h-64 lg:h-80",
      position: "left-[12%] top-[5%]",
      rotation: "rotate-[12deg] blur-[30px]"
    },
    { 
      id: 4, 
      img: "/images/landingPage/openPacks/pokemon1.png",
      width: "w-44 sm:w-56 md:w-72 lg:w-88",
      height: "h-64 sm:h-80 md:h-96 lg:h-[140px]",
      position: "right-[16%] bottom-[10%]",
      rotation: "rotate-[-20deg] blur-[10px]"
    },
    { 
      id: 5, 
      img: "/images/landingPage/openPacks/pokemon1.png",
      width: "w-36 sm:w-44 md:w-56 lg:w-[420px]",
      height: "h-52 sm:h-64 md:h-80 lg:h-[210px]",
      position: "left-[58%] -top-[68%] blur-[5px]",
      rotation: "rotate-[22deg] blur-[1px]"
    },
    { 
      id: 6, 
      img: "/images/landingPage/openPacks/pokemon1.png",
      width: "w-36 sm:w-48 md:w-60 lg:w-76",
      height: "h-52 sm:h-68 md:h-84 lg:h-[115px]",
      position: "right-[25%] top-[10%] ",
      rotation: "rotate-[-25deg] blur-[4px]"
    },
  
    { 
      id: 8, 
      img: "/images/landingPage/openPacks/pokemon1.png",
        width: "w-42 sm:w-54 md:w-68 lg:w-[500px]",
      height: "h-60 sm:h-76 md:h-96 lg:h-[160px]",
      position: "-right-[13%] 2xl:-right-[10%] top-[35%]",
      rotation: "rotate-[-12deg] blur-[51px]"
    },
    { 
      id: 9, 
      img: "/images/landingPage/openPacks/pokemon1.png",
      width: "w-30 sm:w-38 md:w-[160px] lg:w-[160px]",
      height: "h-44 sm:h-56 md:h-70 lg:h-[190px]",
      position: "left-[25%] -top-[20%] blur-[15px]",
      rotation: "rotate-[16deg]"
    },
    { 
      id: 10, 
      img: "/images/landingPage/openPacks/pokemon1.png",
      width: "w-42 sm:w-54 md:w-68 lg:w-[500px]",
      height: "h-60 sm:h-76 md:h-96 lg:h-[160px]",
      position: "-left-[15%] 2xl:-left-[10%] blur-[3px] -top-[50%]",
      rotation: "rotate-[-18deg]"
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-35px); }
        }
        .swing-animation {
          animation: swing 3s ease-in-out infinite;
        }
        .float-animation {
          animation: floatUpDown 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex custom-h px-3 sm:px-7 md:px-20 flex-row -space-x-10 sm:-space-x-8 md:-space-x-6 justify-center">
        
        {/* Scattered Cards - component ke andar hi rahenge */}
        {scatteredCards.map((card) => (
          <div
            key={card.id}
            className={`absolute ${card.width} ${card.height} ${card.position} transition-all duration-1000 ease-out `}
            style={{
              opacity: isScattered ? 1 : 0,
              transform: isScattered 
                ? `translate(0, 0) ${card.rotation}` 
                : 'translate(0, 0) rotate(0deg) scale(0.3)',
              zIndex: isScattered ? 60 : -1,
              pointerEvents: isScattered ? 'auto' : 'none',
            }}
          >
            <div className={isScattered ? "swing-animation" : ""}>
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}

        {/* Left Card */}
        <div
          className="sm:w-[170px] w-[130px] hover:-rotate-7 hover:-translate-x-5 transition-all duration-300 sm:-rotate-[5deg] blur-[2px] hover:blur-[0] h-[200] mt-7 sm:mt-0 md:h-[300px]"
          style={{
            opacity: isScattered ? 0 : 1,
            transform: isScattered 
              ? 'translateX(-300px) scale(0.8) rotate(-30deg)' 
              : 'translateX(0) rotate(-5deg)',
            transition: 'all 1s ease-out',
            pointerEvents: isScattered ? 'none' : 'auto',
          }}
        >
          <img
            src="/images/landingPage/openPacks/lorkana.png"
            alt="lorkana"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Center Card Group */}
        <div className="relative group">
          {/* Stacked images - center ke upar show honge */}
          { !isScattered && (
            <>
              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-3ll duration-500 ease-out sm:w-[200px] w-[150px] z-[47] h-[300px] lg:-mt-24 md:h-[490px] ${
                  isStackVisible ? "-top-3 md:-top-12" : "-top-0"
                }`}
              >
                <img
                  src="/images/landingPage/openPacks/pokemon.png"
                  alt="pokemon"
                  className="object-contain w-full h-full"
                />
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-100 ease-out sm:w-[195px] w-[150px] z-[46] h-[300px] lg:-mt-24 md:h-[490px]  ${
                   isStackVisible ? "-top-4 md:-top-16" : "-top-0"
                }`}
              >
                <img
                  src="/images/landingPage/openPacks/pokemon.png"
                  alt="pokemon"
                  className="object-contain w-full h-full"
                />
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-200 ease-out sm:w-[190px] w-[150px] z-[45] h-[300px] lg:-mt-24 md:h-[490px]  ${
                  isStackVisible ? "-top-6 md:-top-20" : "top-0"
                }`}
              >
                <img
                  src="/images/landingPage/openPacks/pokemon.png"
                  alt="pokemon"
                  className="object-contain w-full h-full"
                />
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-300 ease-out sm:w-[185px] w-[150px] z-[44] h-[300px] lg:-mt-24 md:h-[490px]  ${
                  isStackVisible ? "-top-8 md:-top-24" : "top-0"
                }`}
              >
                <img
                  src="/images/landingPage/openPacks/pokemon.png"
                  alt="pokemon"
                  className="object-contain w-full h-full"
                />
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-[400ms] ease-out sm:w-[180px] w-[150px] z-[43] h-[300px] lg:-mt-24 md:h-[490px]  ${
                  isStackVisible ? "-top-10 md:-top-28" : "top-0"
                }`}
              >
                <img
                  src="/images/landingPage/openPacks/pokemon.png"
                  alt="pokemon"
                  className="object-contain w-full h-full"
                />
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-500 ease-out sm:w-[175px] w-[150px] z-[42] h-[300px] lg:-mt-24 md:h-[490px] ${
                  isStackVisible ? " -top-12 md:-top-32" : "top-0"
                }`}
              >
                <img
                  src="/images/landingPage/openPacks/pokemon.png"
                  alt="pokemon"
                  className="object-contain w-full h-full"
                />
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 delay-[600ms] ease-out sm:w-[170px] w-[150px] z-[41] h-[250px] lg:-mt-24 md:h-[490px]  ${
                  isStackVisible ? "-top-9 md:-top-36" : "top-4"
                }`}
              >
                <img
                  src="/images/landingPage/openPacks/pokemon.png"
                  alt="pokemon"
                  className="object-contain w-full h-full"
                />
              </div>
            </>
          )} 

          {/* Center image - Main Pack */}
          <div
            className={`relative sm:w-[200px] w-[150px] z-50 h-[300px] lg:-mt-24 md:h-[490px] cursor-pointer ${isScattered ? 'float-animation' : ''}`}
            onClick={handleClick}
          >
            <img
              src="/images/landingPage/openPacks/pokemon.png"
              alt="pokemon"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Right Card */}
        <div
          className="sm:w-[170px] w-[130px] hover:rotate-7 hover:translate-x-5 transition-all duration-300 mt-7 sm:mt-0 sm:rotate-[5deg] blur-[2px] hover:blur-[0] h-[200] md:h-[300px]"
          style={{
            opacity: isScattered ? 0 : 1,
            transform: isScattered 
              ? 'translateX(300px) scale(0.8) rotate(30deg)' 
              : 'translateX(0) rotate(5deg)',
            transition: 'all 1s ease-out',
            pointerEvents: isScattered ? 'none' : 'auto',
          }}
        >
          <img
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

export default Pack;
