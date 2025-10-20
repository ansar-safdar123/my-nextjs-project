import Image from "next/image";
import React from "react";

const scatteredCards = [
  {
    id: 1,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-32 sm:w-40 md:w-52 lg:w-64",
    height: "h-48 sm:h-60 md:h-72 lg:h-88",
    position: "left-[3%] top-[5%]",
    rotation: "rotate-[-15deg]",
  },
  {
    id: 2,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-40 sm:w-52 md:w-64 lg:w-80",
    height: "h-56 sm:h-72 md:h-88 lg:h-[120px]",
    position: "right-[5%] top-[8%]",
    rotation: "rotate-[18deg] blur-[51px]",
  },
  {
    id: 3,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-28 sm:w-36 md:w-44 lg:w-56",
    height: "h-40 sm:h-52 md:h-64 lg:h-80",
    position: "left-[12%] top-[5%]",
    rotation: "rotate-[12deg] blur-[30px]",
  },
  {
    id: 4,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-44 sm:w-56 md:w-72 lg:w-88",
    height: "h-64 sm:h-80 md:h-96 lg:h-[140px]",
    position: "right-[16%] bottom-[10%]",
    rotation: "rotate-[-20deg] blur-[10px]",
  },
  {
    id: 5,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-36 sm:w-44 md:w-56 lg:w-[420px]",
    height: "h-52 sm:h-64 md:h-80 lg:h-[210px]",
    position: "left-[58%] -top-[68%] blur-[5px]",
    rotation: "rotate-[22deg] blur-[1px]",
  },
  {
    id: 6,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-36 sm:w-48 md:w-60 lg:w-76",
    height: "h-52 sm:h-68 md:h-84 lg:h-[115px]",
    position: "right-[25%] top-[10%] ",
    rotation: "rotate-[-25deg] blur-[4px]",
  },

  {
    id: 8,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-42 sm:w-54 md:w-68 lg:w-[500px]",
    height: "h-60 sm:h-76 md:h-96 lg:h-[160px]",
    position: "-right-[13%] 2xl:-right-[10%] top-[35%]",
    rotation: "rotate-[-12deg] blur-[51px]",
  },
  {
    id: 9,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-30 sm:w-38 md:w-[160px] lg:w-[160px]",
    height: "h-44 sm:h-56 md:h-70 lg:h-[190px]",
    position: "left-[25%] -top-[20%] blur-[15px]",
    rotation: "rotate-[16deg]",
  },
  {
    id: 10,
    img: "/images/landingPage/openPacks/pokemon1.png",
    width: "w-42 sm:w-54 md:w-68 lg:w-[500px]",
    height: "h-60 sm:h-76 md:h-96 lg:h-[160px]",
    position: "-left-[15%] 2xl:-left-[10%] blur-[3px] -top-[50%]",
    rotation: "rotate-[-18deg]",
  },
];
const ScatteredCards = ({isScattered}) => {
  return (
    <>
      {scatteredCards.map((card) => (
        <div
          key={card.id}
          className={`absolute ${card.width} ${card.height} ${card.position} transition-all duration-1000 ease-out `}
          style={{
            opacity: isScattered ? 1 : 0,
            transform: isScattered
              ? `translate(0, 0) ${card.rotation}`
              : "translate(0, 0) rotate(0deg) scale(0.3)",
            zIndex: isScattered ? 60 : -1,
            pointerEvents: isScattered ? "auto" : "none",
          }}
        >
          <div className={isScattered ? "swing-animation" : ""}>
            <Image
              src={card.img}
              alt={`card-${card.id}`}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ScatteredCards;
