"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const Buy = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [animatingCard, setAnimatingCard] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = useRef({});

  const cards = [
    {
      id: 1,
      src: "/images/buyCards/1.png",
      title: "Bulbasaur",
      price: "$ 121.90",
      views: "416",
      rate: "20% lower hen market",
      sellerName: "ASH",
      seller: "SELLER",
    },
    {
      id: 2,
      src: "/images/buyCards/2.png",
      title: "Dragonair",
      price: "$ 121.90",
      views: "416",
      rate: "10% lower then market",
      sellerName: "ASH",
      seller: "SELLER",
    },
    {
      id: 3,
      src: "/images/buyCards/3.png",
      title: "Charizard",
      price: "$ 121.90",
      views: "416",
      rate: "30% lower then market",
      sellerName: "ASH",
      seller: "SELLER",
    },
    {
      id: 4,
      src: "/images/buyCards/4.png",
      title: "Lotad",
      price: "$ 121.90",
      views: "416",
      rate: "50% lower then market",
      sellerName: "ASH",
      seller: "SELLER",
    },
    {
      id: 5,
      src: "/images/buyCards/5.png",
      title: "Castform",
      price: "$ 121.90",
      views: "416",
      rate: "45% lower then market",
      sellerName: "ASH",
      seller: "SELLER",
    },
  ];

  const handleCardClick = (card) => {
    if (selectedCards.find((c) => c.id === card.id) || animatingCard) return;

    const cardElement = cardRefs.current[card.id];

    if (cardElement) {
      const cardRect = cardElement.getBoundingClientRect();

      setAnimatingCard({
        ...card,
        startX: cardRect.left,
        startY: cardRect.top,
      });

      setTimeout(() => {
        setSelectedCards((prev) => [...prev, card]);
        setAnimatingCard(null);
      }, 800);
    }
  };

  // Get remaining cards (not selected)
  const remainingCards = cards.filter(
    (card) => !selectedCards.find((c) => c.id === card.id)
  );

  const getHoverEffect = (index, card) => {
    // Find the current index in remaining cards array
    const remainingIndex = remainingCards.findIndex((c) => c.id === card.id);
    const isLastCard = remainingIndex === remainingCards.length - 1;

    // Last remaining card moves right
    if (isLastCard) {
      // If this card or any card in the group is hovered
      if (hoveredIndex !== null) {
        return "ease-in-out transition-transform duration-300 -translate-y-2 rotate-3 translate-x-6";
      }
      return "ease-in-out transition-transform duration-300 hover:-translate-y-2 hover:rotate-3 hover:translate-x-6";
    }

    // All other cards move left when any card is hovered
    if (hoveredIndex !== null) {
      return "ease-in-out transition-transform duration-300 -translate-x-6";
    }

    // Default hover state
    return "ease-in-out transition-transform duration-300 hover:translate-y-2 hover:-rotate-3 hover:-translate-x-6";
  };

  return (
    <>
      {animatingCard && (
        <div
          className=" fixed z-[100] pointer-events-none"
          style={{
            left: animatingCard.startX,
            top: animatingCard.startY,
            width: "120px",
            animation: "cardFlyOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        >
          <div className="w-[120px] group sm:w-[140px] relative bgBlur h-fit">
            <Image
              src={animatingCard.src}
              alt={animatingCard.title}
              width={260}
              height={350}
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 flex items-center gap-2 w-full p-2">
              <p className="backdrop-blur bg-black/60 text-white text-[12px] px-2 py-1 rounded-lg font-teko font-bold">
                {animatingCard.views}
              </p>
              <div className="w-6 h-6 p-1 rounded-lg flex items-center justify-center backdrop-blur bg-black/60">
                <Image
                  src="/images/landingPage/buyCards/views.png"
                  alt="views"
                  width={300}
                  height={300}
                  className="w-full object-contain"
                />
              </div>
            </div>
            <div className="pb-2 flex flex-col items-start">
              <p className="text-white font-exo text-sm font-extrabold">
                {animatingCard.price}
              </p>
              <button className="buyButton font-extrabold text-[10px] italic py-1 px-6 rounded-full">
                BUY CARD
              </button>
            </div>
            <div
              className={`absolute bottom-[-32px] left-0 w-full flex justify-center text-center
               
                `}
            >
              <div className="text-white font-exo font-extrabold italic  group-hover:opacity-100 transition-all ease-in duration-300 translate-y-2 group-hover:translate-y-4 leading-tight drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
                <p className="">
                  {animatingCard.rate.split(" ")[0]}{" "}
                  {animatingCard.rate.split(" ")[1].toUpperCase()}
                </p>
                <p className="">
                  {animatingCard.rate
                    .split(" ")
                    .slice(2)
                    .join(" ")
                    .toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes cardFlyOut {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(100vw, 0) rotate(10deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="flex flex-col custom-h md:min-h-[350px] mt-3  md:mt-0 mb-10 items-center text-center">
        {/* Top progress bar */}
        <div className="w-full md:w-[26%] flex items-center  gap-2  mb-6">
          <div className="text-white font-normal font-teko text-lg text-right w-[40%]">
            MONEY SAVED
          </div>
          {/* background: #FFFFFF29; */}

          <div className="relative w-full bg-[#FFFFFF29] progressBAr rounded-full h-3 ">
            <div
              className="absolute top-[1px] left-[1px] h-[8px] bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]  rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${(selectedCards.length / cards.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Card stack */}
        <div className="-space-x-24 md:-space-x-[70px] mb-10 flex items-center justify-center">
          {cards.map((card, index) => {
            const isSelected = selectedCards.find((c) => c.id === card.id);
            const isAnimating = animatingCard?.id === card.id;

            if (isSelected) return null;

            return (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[card.id] = el)}
                onClick={() => handleCardClick(card)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group w-[130px] sm:w-[140px] relative z-40 hover:z-50 bgBlur h-fit cursor-pointer ${
                  isAnimating ? "invisible" : "visible"
                } ${getHoverEffect(index, card)}`}
              >
                {/* Card Image */}
                <Image
                  src={card.src}
                  alt={card.title}
                  width={260}
                  height={350}
                  className="w-full h-auto"
                  priority
                />

                {/* Top overlay (views info) */}
                <div className="absolute top-0 left-0 flex items-center gap-1 w-full p-2">
                  <p className="backdrop-blur bg-black/90 text-white text-[13px] px-2 pt-[2px] rounded-lg font-teko font-light">
                    {card.views}
                  </p>
                  <div className="w-5 h-5 p-1 rounded-lg flex items-center justify-center backdrop-blur bg-black/90">
                    <Image
                      src="/images/landingPage/buyCards/views.png"
                      alt="views"
                      width={300}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                </div>

                {/* Card Bottom Info */}
                {/* <div className="pb-2 flex flex-col items-start">
                  <p className="text-white font-exo text-sm font-extrabold">
                    {card.price}
                  </p>
                  <button className="buyButton font-extrabold text-[10px] italic py-1 px-6 rounded-full mt-1">
                    BUY CARD
                  </button>
                </div> */}
                <div className="pb-2 pt-1 font-exo flex flex-col items-start">
                  <div className="flex pb-1 justify-between w-full items-center">
                    <p className="text-[12px] italic text-white font-exo font-extrabold">
                      {card.price}
                    </p>

                    <div className="flex items-center gap-1">
                      <div className="flex flex-col ">
                        <span className="text-[7px] p-0 -mb-[2px] font-bold font-exo italic">
                          {card.sellerName}
                        </span>
                        <span className="text-[5px] p-0 m-0 font-medium text-right font-teko italic">
                          {card.seller}
                        </span>
                      </div>
                      <div className="w-3 h-3">
                        <Image
                          src="/images/buyCards/4.png"
                          alt="views"
                          width={300}
                          height={300}
                          className="w-full object-fill"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="buyButton font-extrabold font-exo text-[10px] italic sm:py-[2px] rounded-full">
                    BUY CARD
                  </button>
                </div>

                {/* Rate text - stays within card width */}
                <div
                  className={`absolute bottom-[-32px] left-0 w-full flex justify-center text-center
                ${isAnimating ? "invisible" : "visible"}
                `}
                >
                  <div className="text-white font-exo font-extrabold italic opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-4 leading-tight drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
                    <p className="">
                      {card.rate.split(" ")[0]}{" "}
                      {card.rate.split(" ")[1].toUpperCase()}
                    </p>
                    <p className="">
                      {card.rate.split(" ").slice(2).join(" ").toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Buy;
