'use client'

import Image from "next/image"

export default function SellCards() {
	const cards = [
		{ id: 3, src: "/images/buyCards/3.png", title: "Charizard", price: "$121.90", views: "22" },
		{ id: 4, src: "/images/buyCards/4.png", title: "Lotad", price: "$121.90", views: "22" },
		{ id: 5, src: "/images/buyCards/5.png", title: "Castform", price: "$121.90", views: "22" },
	];

	return (
		<>

			<div className="flex lg:mt-20 items-center lg:items-baseline-start flex-col lg:flex-row mb-10 w-full justify-center gap-8">

				<div className="space-y-8 flex flex-row items-center sm:gap-0 justify-center md:space-y-0">
					{cards.map((card) => (
						<div
							key={card.id}
							// hover:rotate-6 transition-transform duration-500
							className="w-[100px] sm:w-[150px] relative z-50 ease-in-out mb-0 bgBlur h-fit"
						>
							<Image
								src={card.src}
								alt={card.title}
								width={260}
								height={350}
								className="w-full h-auto"
								priority
							/>
							<div className="absolute top-0 left-0 flex items-center gap-1 sm:gap-2 w-full p-2">
								<p className="backdrop-blur bg-black/60 text-white text-[10px] sm:text-[12px] px-2 py-[2px] sm:py-1 rounded-lg font-exo font-bold">
									{card.views}

								</p>
								<div className="sm:w-6 sm:h-6 p-1 rounded-lg flex items-center justify-center backdrop-blur bg-black/60">
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
								<p className="text-white font-exo sm:text-[18px] font-extrabold mb-2">
									{card.price}
								</p>
								<button className="buyButton font-extrabold text-xs italic py-1 sm:py-2 sm:px-6 rounded-full">
									BUY CARD
								</button>
							</div>
						</div>
					))}
				</div>
				<div className=" lg:-mt-15">
					<h1 className="font-teko  text-center text-3xl md:text-5xl text-white">
						MY LISTINGS
					</h1>

					<div className="w-64 md:w-96 border rounded-2xl h-64 md:h-80">
					</div>
				</div>

			</div>
		</>

	)
}


