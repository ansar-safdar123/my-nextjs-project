"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function CollectCardsCarousel() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if click is on a card or the enlarged card
      const isCard = e.target.closest('.card-item');
      const isEnlargedCard = e.target.closest('.enlarged-card-container');
      
      // If click is outside both cards, close the enlarged view
      if (hoveredCard && !isCard && !isEnlargedCard) {
        handleClose();
      }
    };

    if (hoveredCard) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [hoveredCard]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setHoveredCard(null);
      setIsClosing(false);
    }, 600);
  };

  // const handleCardHover = (card) => {
  //   // If already hovering a card, flip out then flip in new card
  //   if (hoveredCard && hoveredCard.id !== card.id) {
  //     setIsTransitioning(true);
  //     setTimeout(() => {
  //       setHoveredCard(card);
  //       setIsTransitioning(false);
  //     }, 300);
  //   } else {
  //     setHoveredCard(card);
  //     setIsClosing(false);
  //   }
  // };

  const handleCardHover = (card) => {
    // If already hovering a card, fade out then fade in new card
    if (hoveredCard && hoveredCard.id !== card.id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setHoveredCard(card);
        setIsTransitioning(false);
      }, 200);
    } else {
      setHoveredCard(card);
      setIsClosing(false);
    }
  };

  const cards = [
    {
      id: 1,
      src: "/images/landingPage/collect/1.png",
      alt: "Timon Card",
      title: "TIMON",
      subtitle: "HOLOFOIL",
      price: "$ 11.90",
      collection: "AZURITE SEA",
      views: "2",
      rating: "4|B",
    },
    {
      id: 2,
      src: "/images/landingPage/collect/2.png",
      alt: "Mew Card",
      title: "TEAM ROCKET'S MEWTWO EX",
      subtitle: "HOLOFOIL",
      price: "$ 11.90",
      collection: "PRISMATIC EVOLUTIONS",
      views: "41",
      rating: "4|B",
    },
    {
      id: 3,
      src: "/images/landingPage/collect/3.png",
      alt: "Blaziken Card",
      title: "TEAM ROCKET'S MEWTWO EX",
      subtitle: "HOLOFOIL",
      price: "$ 11.90",
      collection: "PRISMATIC EVOLUTIONS",
      views: "2",
      rating: "4|B",
    },
  ];

  return (
    <>
      {/* Enlarged Card */}
      {hoveredCard && (
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000000000] pointer-events-none"
        >
          <div
            className={`enlarged-card-container w-[210px] md:w-[300px] group transition-all duration-300 rotate-4 relative rounded-lg px-4 pointer-events-auto ${
              isClosing
                ? "animate-[flipOut_0.6s_ease-in-out]"
                : "animate-[flipIn_0.6s_ease-in-out]"
            }
             ${isTransitioning} ? "animate-[fadeIn_0.6s_ease-in-out]" : ""
            `}
            onMouseEnter={() => handleCardHover(cards[1])}
          >
            <Image
              src={hoveredCard.src}
              alt={hoveredCard.title}
              width={450}
              height={600}
              className="w-full img-bg-shadow"
            />
            <div className="flex justify-center -mt-8 sm:-mt-12">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="cursor-pointer buyButton transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 font-exo font-extrabold !w-fit text-[8px] md:text-sm italic py-1 px-2 md:px-6 rounded-full"
              >
                WITHDRAW CARD
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes flipIn {
          0% {
            transform: perspective(1000px) rotateY(-180deg);
            opacity: 0;
          }
          100% {
            transform: perspective(1000px) rotateY(0deg);
            opacity: 1;
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


        @keyframes flipOut {
          0% {
            transform: perspective(1000px) rotateY(0deg);
            opacity: 1;
          }
          100% {
            transform: perspective(1000px) rotateY(180deg);
            opacity: 0;
          }
        }

        @keyframes float-up {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-down {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .float-up {
          animation: float-up 3s ease-in-out infinite;
        }

        .float-down {
          animation: float-down 3s ease-in-out infinite;
        }


      `}</style>

      <div className="md:-mt-20 custom-h z-[20000000000] font-exo flex space-x-1 sm:space-x-2 flex-row items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={card.id}
            onMouseEnter={() => handleCardHover(card)}
            className={`card-item w-[180px] relative ease-in-out rounded-lg backdrop-blur-lg bg-white/40 pt-10 px-1 md:px-2 h-fit transition-transform duration-500 cursor-pointer hover:scale-105 ${
              index === 1
                ? hoveredCard
                  ? "mt-14 w-[200px]"
                  : "float-up mt-14 w-[200px]"
                : hoveredCard
                ? ""
                : "float-down"
            }`}
          >
            <Image
              src={card.src}
              alt={card.title}
              width={260}
              height={300}
              className="w-full"
              priority
            />

            <div className="absolute top-0 left-0 flex items-center justify-between gap-2 w-full p-2">
              <div className="flex items-center gap-2">
                <p className="backdrop-blur bg-[#FFFFFF66]/60 text-[#2C3754] text-[10px] sm:text-[12px] px-2 py-1 rounded-lg font-exo font-bold">
                  {card.views}
                </p>
                <div className="w-6 h-6 p-1 rounded-lg flex items-center text-[#2C3754] justify-center backdrop-blur bg-[#FFFFFF66]/60">
                  <Image
                    src="/images/landingPage/collect/eye.png"
                    alt="views"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-6 h-6 p-1 rounded-lg flex items-center text-[#2C3754] justify-center backdrop-blur bg-[#FFFFFF66]/60">
                <Image
                  src="/images/landingPage/collect/lock.png"
                  alt="views"
                  width={300}
                  height={300}
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* Card Info */}
            <div className="space-y-1 mt-2">
              <div className="bg-[#FFFFFF66]/60 backdrop-blur rounded-md py-1 px-2">
                <p className="text-[#2C3754] text-center text-[10px] tracking-wider">
                  {card.title}
                </p>
              </div>

              <div className="bg-[#FFFFFF66]/60 backdrop-blur rounded-md py-1 px-2">
                <p className="text-[#2C3754] text-center text-[10px] tracking-wider">
                  {card.subtitle}
                </p>
              </div>

              <div className="bg-[#FFFFFF66]/60 backdrop-blur rounded-md py-1 px-2">
                <p className="text-[#2C3754] text-center text-[10px]">
                  {card.price}
                </p>
              </div>

              <div className="py-1 px-2">
                <p className="text-white text-center text-[10px] tracking-wider">
                  {card.collection}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}