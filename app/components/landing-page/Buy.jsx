"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const Buy = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [animatingCard, setAnimatingCard] = useState(null);
  const cardRefs = useRef({});

  const cards = [
    {
      id: 1,
      src: "/images/buyCards/1.png",
      title: "Bulbasaur",
      price: "$121.90",
      views: "22",
    },
    {
      id: 2,
      src: "/images/buyCards/2.png",
      title: "Dragonair",
      price: "$121.90",
      views: "22",
    },
    {
      id: 3,
      src: "/images/buyCards/3.png",
      title: "Charizard",
      price: "$121.90",
      views: "22",
    },
    {
      id: 4,
      src: "/images/buyCards/4.png",
      title: "Lotad",
      price: "$121.90",
      views: "22",
    },
    {
      id: 5,
      src: "/images/buyCards/5.png",
      title: "Castform",
      price: "$121.90",
      views: "22",
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

  return (
    <>
      {animatingCard && (
        <div
          className="fixed z-[100] pointer-events-none"
          style={{
            left: animatingCard.startX,
            top: animatingCard.startY,
            width: "120px",
            animation: "cardFlyOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        >
          <div className="w-[120px] sm:w-[140px] relative bgBlur h-fit">
            <Image
              src={animatingCard.src}
              alt={animatingCard.title}
              width={260}
              height={350}
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 flex items-center gap-2 w-full p-2">
              <p className="backdrop-blur bg-black/60 text-white text-[12px] px-2 py-1 rounded-lg font-exo font-bold">
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

      <div className="flex flex-col md:min-h-[350px] mt-3 md:mt-0 mb-10 items-center text-center">
        {/* Top progress bar */}
        <div className="w-full md:w-1/3 flex items-center md:space-x-3 mb-6">
          <div className="text-white font-normal font-teko text-lg md:text-2xl w-1/2">
            MONEY SAVED
          </div>
          <div className="relative w-full bg-[#c7d6fd] progressBAr rounded-full h-3">
            <div
              className="absolute top-0 left-0 h-3 bg-[#76adff] rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${(selectedCards.length / cards.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Card stack */}
        <div className="-space-x-24 mb-10 flex items-center justify-center">
          {cards.map((card) => {
            const isSelected = selectedCards.find((c) => c.id === card.id);
            const isAnimating = animatingCard?.id === card.id;

            if (isSelected) return null;

            return (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[card.id] = el)}
                onClick={() => handleCardClick(card)}
                className={`w-[120px] sm:w-[140px] relative z-40 hover:z-50 ease-in-out bgBlur h-fit transition-transform duration-300 hover:-translate-y-4 hover:rotate-5 hover:translate-x-5 cursor-pointer ${
                  isAnimating ? "invisible" : "visible"
                }`}
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  width={260}
                  height={350}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-0 left-0 flex items-center gap-2 w-full p-2">
                  <p className="backdrop-blur bg-black/60 text-white text-[12px] px-2 py-1 rounded-lg font-exo font-bold">
                    {card.views}
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
                    {card.price}
                  </p>
                  <button className="buyButton font-extrabold text-[10px] italic py-1 px-6 rounded-full">
                    BUY CARD
                  </button>
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
