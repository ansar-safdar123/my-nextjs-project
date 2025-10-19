



"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function SellCards() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [boxAnimatingOut, setBoxAnimatingOut] = useState(false);
  const [availableCards, setAvailableCards] = useState([]);
  const [returningCards, setReturningCards] = useState(new Set());
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

  const handleDelist = (cardToRemove, indexToRemove) => {
    // Mark card as delisting to trigger fade out
    setSelectedCards((prev) =>
      prev.map((card, idx) =>
        idx === indexToRemove ? { ...card, isDelisting: true } : card
      )
    );

    // After fade out, remove from selected and add back to available
    setTimeout(() => {
      setSelectedCards((prev) =>
        prev.filter((_, idx) => idx !== indexToRemove)
      );

      // Mark this card as returning right before adding it back
      setReturningCards((prev) => new Set(prev).add(cardToRemove.id));

      // Add back to available cards with a slight delay
      setTimeout(() => {
        setAvailableCards((prev) =>
          prev.map((c) =>
            c.id === cardToRemove.id ? { ...c, isSelected: false } : c
          )
        );

        // Remove from returning cards after animation completes
        setTimeout(() => {
          setReturningCards((prev) => {
            const newSet = new Set(prev);
            newSet.delete(cardToRemove.id);
            return newSet;
          });
        }, 400);
      }, 50);
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

      <div className="flex lg:mb-20 custom-h gap-10 items-center flex-col lg:flex-row w-full  justify-center">
        <div className="flex flex-row items-center gap-2 justify-center min-h-[200px]">
          {availableCards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => !card.isSelected && handleCardClick(card)}
              className="w-[90px] mt-10 sm:w-[110px] relative z-50 ease-in-out mb-0 bgBlur h-fit cursor-pointer hover:scale-105"
              style={{
                animation: card.isSelected
                  ? "fadeOut 0.4s ease-out forwards"
                  : mounted && !returningCards.has(card.id)
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
              

              <div className="pb-2 pt-1 font-exo flex flex-col items-start">
                <div className="flex pb-1 justify-between w-full items-center">
                  <p className="text-[8px] italic text-white font-exo font-extrabold">
                    {card.price}
                  </p>

                  <div className="flex items-center gap-1">
                    <div className="flex flex-col ">
                      <span className="text-[6px] p-0 -mb-[2px] font-bold font-exo italic">
                        {card.sellerName}
                      </span>
                      <span className="text-[4px] p-0 m-0 font-medium text-right font-teko italic">
                        {card.seller}
                      </span>
                    </div>
                    <div className="w-2 h-2">
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
                  className="w-[90px] sm:w-[110px] relative bgBlur h-fit"
                  style={{
                    animation: card.isDelisting
                      ? "fadeOut 0.4s ease-out forwards"
                      : "fadeIn 0.4s ease-out forwards",
                    opacity: card.isDelisting ? 0 : undefined,
                  }}
                >
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={260}
                    height={350}
                    className="w-full h-auto"
                  />
                  
                 <div className="pb-2 pt-1 font-exo flex flex-col items-start">
                <div className="flex pb-1 justify-between w-full items-center">
                  <p className="text-[8px] italic text-white font-exo font-extrabold">
                    {card.price}
                  </p>

                  <div className="flex items-center gap-1">
                    <div className="flex flex-col ">
                      <span className="text-[6px] p-0 -mb-[2px] font-bold font-exo italic">
                        {card.sellerName}
                      </span>
                      <span className="text-[4px] p-0 m-0 font-medium text-right font-teko italic">
                        {card.seller}
                      </span>
                    </div>
                    <div className="w-2 h-2">
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
                <div className="flex bg-[#2C3754] p-1 py-[2px] gap-1 w-full md:flex-row flex-col rounded-md md:rounded-full">

                <button 
                  className="bg-white text-[#2C3754] font-extrabold font-exo text-[6px] italic p-[2px] px-1 pb-1 rounded-full"
                  onClick={() => handleDelist(card, index)}
                >
                 DELIST
                </button>
                 <button className="bg-[#2C3754] text-white font-extrabold font-exo text-[6px] italic px-1.5  p-[2px] border border-[#161e36] rounded-full">
                 CHANGE PRICE
                </button>
                </div>
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