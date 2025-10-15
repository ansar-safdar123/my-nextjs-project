import Image from "next/image";

const Buy = () => {
  const cards = [
    { id: 1, src: "/images/buyCards/1.png", title: "Bulbasaur", price: "$121.90", views: "22" },
    { id: 2, src: "/images/buyCards/2.png", title: "Dragonair", price: "$121.90", views: "22" },
    { id: 3, src: "/images/buyCards/3.png", title: "Charizard", price: "$121.90", views: "22" },
    { id: 4, src: "/images/buyCards/4.png", title: "Lotad", price: "$121.90", views: "22" },
    { id: 5, src: "/images/buyCards/5.png", title: "Castform", price: "$121.90", views: "22" },
  ];

  return (
    <div className=" flex flex-col items-center text-center">
      {/* Top progress bar */}
      <div className="w-full md:w-1/3 flex items-center space-x-3 mb-6">
        <div className="text-white font-normal font-teko text-lg md:text-2xl w-1/2">
          MONEY SAVED
        </div>
        <div className="relative w-full bg-[#8DA2D8] progressBAr rounded-full h-3">
          <div
            className="absolute top-0 left-0 h-3 bg-[#7caefb] rounded-full"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>

      {/* Card stack */}
      <div className="-space-x-40 sm:-space-x-24 mb-10 flex items-center justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" w-[180px] sm:w-[220px] relative z-40 hover:z-50 ease-in-out bgBlur h-fit transition-transform duration-300 hover:-translate-y-4 hover:rotate-5 hover:translate-x-5"
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
                  // priority
                />
              </div>
            </div>
            <div className="py-4 pb-2 flex flex-col items-start">
              <p className="text-white font-exo text-[18px] font-extrabold mb-2">
                {card.price}
              </p>
              <button className="buyButton font-extrabold text-xs italic py-2 px-6 rounded-full">
                BUY CARD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
