"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function SellCards() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [animatingCard, setAnimatingCard] = useState(null);
  const cardRefs = useRef({});
  const boxRef = useRef(null);

  const cards = [
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
    const boxElement = boxRef.current;

    if (cardElement && boxElement) {
      const cardRect = cardElement.getBoundingClientRect();
      const boxRect = boxElement.getBoundingClientRect();

      setAnimatingCard({
        ...card,
        startX: cardRect.left,
        startY: cardRect.top,
        endX: boxRect.left,
        endY: boxRect.top,
      });

      setTimeout(() => {
        setSelectedCards((prev) => [...prev, card]);
        setAnimatingCard(null);
      }, 600);
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
            width: "90px",
            animation: "cardFly 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        >
          <div className="w-[90px] sm:w-[100px] relative bgBlur h-fit">
            <Image
              src={animatingCard.src}
              alt={animatingCard.title}
              width={260}
              height={350}
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 flex items-center gap-1 sm:gap-2 w-full p-1">
              <p className="backdrop-blur bg-black/60 text-white text-[10px] px-[5px] py-[1px] sm:py-1 rounded-lg font-exo font-bold">
                {animatingCard.views}
              </p>
              <div className="sm:w-6 sm:h-5 p-1 rounded-lg flex items-center justify-center backdrop-blur bg-black/60">
                <Image
                  src="/images/landingPage/buyCards/views.png"
                  alt="views"
                  width={300}
                  height={300}
                  className="w-full object-contain"
                />
              </div>
            </div>
            <div className="pb-2 pt-1 flex flex-col items-start">
              <p className="text-[10px] text-white font-exo font-extrabold">
                {animatingCard.price}
              </p>
              <button className="buyButton font-extrabold text-[10px] italic sm:px-1 rounded-full">
                BUY CARD
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes cardFly {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
                ${animatingCard?.endX - animatingCard?.startX}px,
                ${animatingCard?.endY - animatingCard?.startY}px
              )
              scale(0.5);
            opacity: 0;
          }
        }

        .card-fly {
          animation: cardFly 0.5s linear forwards;
        }
      `}</style>

      <div className="flex lg:mb-20 gap-5 items-center lg:items-baseline-start flex-col lg:flex-row w-full justify-center">
        <div className="flex flex-row items-center gap-2 justify-center">
          {cards.map((card) => {
            const isSelected = selectedCards.find((c) => c.id === card.id);
            const isAnimating = animatingCard?.id === card.id;

            if (isSelected) return null;

            return (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[card.id] = el)}
                onClick={() => handleCardClick(card)}
                className={`w-[90px] mt-10 sm:w-[100px] relative z-50 ease-in-out mb-0 bgBlur h-fit cursor-pointer transition-all duration-300 hover:scale-105 ${
                  isAnimating ? "invisible" : "visible"
                }`}
              >
                <Image
                  src={`${card.src}`}
                  alt={card.title}
                  width={260}
                  height={350}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-0 left-0 flex items-center gap-1 sm:gap-2 w-full p-1">
                  <p className="backdrop-blur bg-black/60 text-white text-[10px] px-[5px] py-[1px] sm:py-1 rounded-lg font-exo font-bold">
                    {card.views}
                  </p>
                  <div className="sm:w-6 sm:h-5 p-1 rounded-lg flex items-center justify-center backdrop-blur bg-black/60">
                    <Image
                      src="/images/landingPage/buyCards/views.png"
                      alt="views"
                      width={300}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
                <div className="pb-2 pt-1 flex flex-col items-start">
                  <p className="text-[10px] text-white font-exo font-extrabold">
                    {card.price}
                  </p>
                  <button className="buyButton font-extrabold text-[10px] italic sm:px-1 rounded-full">
                    BUY CARD
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h1 className="font-teko text-center text-2xl md:text-4xl text-white">
            MY LISTINGS
          </h1>

          <div
            ref={boxRef}
            className=" md:w-96 h-fit md:h-60 mb-5 md:mb-0 border-2 border-white rounded-2xl p-4 overflow-auto"
          >
            <div className="flex flex-wrap gap-2 justify-start items-start">
              {selectedCards.map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="w-[90px] sm:w-[100px] relative bgBlur h-fit animate-[fadeIn_0.3s_ease-in]"
                >
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={260}
                    height={350}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 flex items-center gap-1 sm:gap-2 w-full p-1">
                    <p className="backdrop-blur bg-black/60 text-white text-[10px] px-[5px] py-[1px] sm:py-1 rounded-lg font-exo font-bold">
                      {card.views}
                    </p>
                    <div className="sm:w-6 sm:h-5 p-1 rounded-lg flex items-center justify-center backdrop-blur bg-black/60">
                      <Image
                        src="/images/landingPage/buyCards/views.png"
                        alt="views"
                        width={300}
                        height={300}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="pb-2 pt-1 flex flex-col items-start">
                    <p className="text-[10px] text-white font-exo font-extrabold">
                      {card.price}
                    </p>
                    <button className="buyButton font-extrabold text-[10px] italic sm:px-1 rounded-full">
                      BUY CARD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
