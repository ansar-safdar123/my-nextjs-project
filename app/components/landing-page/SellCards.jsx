"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function SellCards() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [boxAnimatingOut, setBoxAnimatingOut] = useState(false);
  const [availableCards, setAvailableCards] = useState([]);
  const boxRef = useRef(null);

  const allCards = [
    {
      id: 3,
      src: "/images/buyCards/3.png",
      title: "Charizard",
      price: "$ 121.90",
      views: "22",
      sellerName: "ASH",
      seller: "SELLER",
    },
    {
      id: 4,
      src: "/images/buyCards/4.png",
      title: "Lotad",
      price: "$ 121.90",
      views: "22",
      sellerName: "ASH",
      seller: "SELLER",
    },
    {
      id: 5,
      src: "/images/buyCards/5.png",
      title: "Castform",
      price: "$ 121.90",
      views: "22",
      sellerName: "ASH",
      seller: "SELLER",
    },
  ];

  useEffect(() => {
    setMounted(true);
    setAvailableCards(allCards.map((card) => ({ ...card, isSelected: false })));
  }, []);

  const handleCardClick = (card) => {
    // Mark card as selected to trigger fade out
    setAvailableCards((prev) =>
      prev.map((c) => (c.id === card.id ? { ...c, isSelected: true } : c))
    );

    // Add to selected cards with fade in after fade out completes
    setTimeout(() => {
      setSelectedCards((prev) => [...prev, card]);

      // After all 3 cards are selected, animate box out and reset
      if (selectedCards.length === 2) {
        setTimeout(() => {
          setBoxAnimatingOut(true);

          setTimeout(() => {
            setSelectedCards([]);
            setBoxAnimatingOut(false);
            setAvailableCards(
              allCards.map((card) => ({ ...card, isSelected: false }))
            );
          }, 800);
        }, 1500);
      }
    }, 400);
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100vw);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
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

        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100vw);
            opacity: 0;
          }
        }
      `}</style>

      <div className="flex lg:mb-20 custom-h gap-5 items-center flex-col lg:flex-row w-full  justify-center">
        <div className="flex flex-row items-center gap-2 justify-center min-h-[200px]">
          {availableCards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => !card.isSelected && handleCardClick(card)}
              className="w-[90px] mt-10 sm:w-[100px] relative z-50 ease-in-out mb-0 bgBlur h-fit cursor-pointer hover:scale-105"
              style={{
                animation: card.isSelected
                  ? "fadeOut 0.4s ease-out forwards"
                  : mounted
                  ? `slideInFromLeft 0.3s ease-out forwards`
                  : "none",
                pointerEvents: card.isSelected ? "none" : "auto",
                opacity: card.isSelected ? 0 : undefined,
              }}
            >
              <Image
                src={`${card.src}`}
                alt={card.title}
                width={260}
                height={350}
                className="w-full h-auto"
                priority
              />
              {/* <div className="absolute top-0 left-0 flex items-center gap-1 sm:gap-2 w-full p-1">
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
              </div> */}
              <div className="pb-2 pt-1 flex flex-col items-start">
                <p className="text-[8px] italic text-white font-exo font-extrabold">
                  {card.price}
                </p>
                <button className="buyButton font-extrabold font-exo text-[8px] italic sm:py-[2px] rounded-full">
                  SELL CARD
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={
            boxAnimatingOut
              ? "animate-[slideOutLeft_0.8s_ease-in_forwards]"
              : ""
          }
        >
          <h1 className="VCR-font-family my-2 text-center text-2xl md:text-2xl text-white">
            MY LISTINGS
          </h1>

          <div
            ref={boxRef}
            className="md:w-96 w-[310px] h-60 mb-5 md:mb-0 border border-white rounded-2xl p-2 md:p-4 overflow-auto"
          >
            <div className="flex flex-wrap gap-2 justify-center items-center h-full">
              {selectedCards.map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="w-[90px] sm:w-[100px] relative bgBlur h-fit"
                  style={{
                    animation: "fadeIn 0.4s ease-out forwards",
                  }}
                >
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={260}
                    height={350}
                    className="w-full h-auto"
                  />
                  {/* <div className="absolute top-0 left-0 flex items-center gap-1 sm:gap-2 w-full p-1">
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
                  </div> */}
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
