import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CollectCardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = [
    {
      src: '/images/landingPage/collect/1.png',
      alt: 'Timon Card',
      title: 'TIMON',
      subtitle: 'HOLOFOIL',
      price: '$ 11.90',
      collection: 'AZURITE SEA',
      views: '2',
      rating: '4|B'
    },
    {
      src: '/images/landingPage/collect/2.png',
      alt: 'Mew Card',
      title: "TEAM ROCKET'S MEWTWO EX",
      subtitle: 'HOLOFOIL',
      price: '$ 11.90',
      collection: 'PRISMATIC EVOLUTIONS',
      views: '41',
      rating: '4|B'
    },
    {
      src: '/images/landingPage/collect/3.png',
      alt: 'Blaziken Card',
      title: "TEAM ROCKET'S MEWTWO EX",
      subtitle: 'HOLOFOIL',
      price: '$ 11.90',
      collection: 'PRISMATIC EVOLUTIONS',
      views: '2',
      rating: '4|B'
    }
  ];

  // Auto-rotate cards


  return (
    <div className="sm:px-4 ">
      <div className="space-y-8 mb-10 font-teko flex space-x-1 sm:space-x-2 flex-row items-center justify-center md:space-y-0">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-[241px] relative z-50 ease-in-out rounded-lg backdrop-blur-lg bg-white/40 pt-10 px-2 sm:px-4 pb-4 h-fittransition-transform duration-500 ${index === 1 ? 'float-up mt-14' : 'float-down'}`}
          >

            <Image
              src={card.src}
              alt={card.title}
              width={260}
              height={350}
              className="w-full h-auto"
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
                    className=" object-contain"
                  // priority
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
                // priority
                />
              </div>
            </div>

            {/* Card Info */}
            <div className="space-y-2 mt-2">
              {/* Title */}
              <div className="bg-[#FFFFFF66]/60 backdrop-blur rounded-xl py-2 px-4">
                <p className=" text-[#2C3754] text-center text-xs sm:text-lg tracking-wider">
                  {card.title}
                </p>
              </div>

              {/* Subtitle */}
              <div className="bg-[#FFFFFF66]/60 backdrop-blur rounded-xl py-2 px-4">
                <p className=" text-[#2C3754] text-center text-xs sm:text-lg tracking-wider">
                  {card.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="bg-[#FFFFFF66]/60 backdrop-blur rounded-xl py-2 px-4">
                <p className=" text-[#2C3754] text-center text-xs sm:text-lg">
                  {card.price}
                </p>
              </div>

              {/* Collection */}
              <div className="bg-[#FFFFFF66]/60 backdrop-blur rounded-xl py-2 px-4">
                <p className=" text-[#2C3754] text-center text-xs sm:text-lg tracking-wider">
                  {card.collection}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
}