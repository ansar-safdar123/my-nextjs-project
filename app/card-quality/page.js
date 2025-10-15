'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./style.css"
export default function CardQualityPage() {
    const [visibleCards, setVisibleCards] = useState([]);
    const containerRef = useRef();

    useEffect(() => {
        scoringScale.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
            }, 1400 + index * 100);
        });
    }, []);

    useEffect(() => {
        // Create starry background effect
        const createStars = () => {
            const container = containerRef.current;
            if (!container) return;

            // Clear existing stars
            const existingStars = container.querySelectorAll('.star');
            existingStars.forEach(star => star.remove());

            // Create new stars
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.position = 'absolute';
                star.style.width = '1px';
                star.style.height = '1px';
                star.style.backgroundColor = 'white';
                star.style.borderRadius = '50%';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.opacity = Math.random() * 0.8 + 0.2;
                star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
                container.appendChild(star);
            }
        };

        createStars();
    }, []);

    useEffect(() => {
        imperfections.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
            }, 800 + index * 200);
        });
    }, []);


    const imperfections = [
        {
            title: "SCRATCH",
            definition: "A mark that cuts or scrapes the surface, removing a thin layer of material.",
            terms: "Terms: Score, Gouge",
            example: "A prominent scratch visible across the card surface",
            image: "/images/qualityCards/scratch.png"
        },
        {
            title: "SCUFFING",
            definition: "A pattern of light scratches or surface abrasions in an area.",
            terms: "Terms: Scratch Groups, Clouding, Blister/Sleeve Glaze, Buffing",
            example: "Hazy, scuffed area on the card's surface",
            image: "/images/qualityCards/scuffing.png"

        },
        {
            title: "INDENTATION",
            definition: "A surface groove or depression that pushes material inward without breaking.",
            terms: "Terms: Ding, Indent, Dent, Impression, Pockmarks",
            example: "Clear indentation or depression on the card's border",
            image: "/images/qualityCards/indentation.png"

        },
        {
            title: "EDGEWEAR",
            definition: "Loss of color, shine, or material along edges, borders, or corners.",
            terms: "Terms: Border Wear, Fraying, Nicks, Flaking, Rough(ed) Edges, Flap",
            example: "Visible wear such as white specks or fraying along the border",
            image: "/images/qualityCards/edgewear.png"

        },
        {
            title: "DEFECT",
            definition: "An error caused during printing or manufacturing, not from wear.",
            terms: "Terms: Blurred/Missing Ink, Crimping, Miscuts, Centering, Shifted, Roller Line/Mark, Foil Bubbling, Speckled Foil, Extra Glaze",
            example: "Printing defect, possibly a misaligned cut or ink smudge",
            image: "/images/qualityCards/defect.png"

        }
    ];

    const scoringScale = [
        { level: "Slight", points: 1, color: "text-green-400", description: "Impacting a Minimal surface area of the card." },
        { level: "Minor", points: 3, color: "text-orange-400", description: "Impacting a Noticeable surface area of the card." },
        { level: "Moderate", points: 4, color: "text-red-400", description: "Impacting a Significant surface area of the card." },
        { level: "Major", points: 8, color: "text-red-600", description: "Impacting the surface area of the card above the measures for other severities." }
    ];

    return (
        <div
            ref={containerRef}
            className="min-h-screen relative overflow-hidden"
            style={{
                backgroundImage: 'url(/images/qualityCards/bg2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            }}
        >



            {/* Dark overlay for text readability */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div> */}

            <div className="container mx-auto px-6 py-12 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center "
                >
                    <h1
                        className="text-xl sm:text-3xl md:text-[40px]  mb-[22px] tracking-wide text-gradient-exo"
                    >
                        CARD QUALITY CHECK GUIDE
                    </h1>


                    <p className=" text-white font-light text-lg md:text-[28px] mb-10 z-10 sm:mb-0 mx-auto tracking-normal leading-8" style={{ fontFamily: 'var(--font-teko)' }}>
                        Unlike cards in physical packs, we guarantee NM or better! <br /> Get top-quality cards every time,
                        surpassing what physical packs can offer in a heartbeat!
                    </p>

                    <motion.div
                        initial={{ scale: 0.8, rotate: -2 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-black px-4 md:px-8 md:py-4 rounded-lg inline-block transform shadow-2xl"
                    >
                        <div className="flex items-center gap-1 md:gap-0 -mt-16 ">

                            <h2

                                className="text-2xl text-gradient-exo md:text-[40px] text-left -mr-10 !z-50  -rotate-[6.19deg] ">
                                ALL OF OUR CARDS ARE <br /> <span> IN NEAR MINT CONDITION!</span>
                            </h2>
                            <div className="relative md:w-[375px] md:h-[442px] w-[250px] h-[300px]">
                                <Image
                                    src="/images/img1.png"
                                    alt="Product"
                                    fill
                                    className="object-contain rounded-md rotate-[9.16deg] -z-10"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Near Mint Definition Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-16 font-teko"
                >
                    <h3 className="text-xl sm:text-3xl md:text-[32px] text-gradient-exo text-center mb-6">
                        WHAT IS NEAR-MINT CONDITION?
                    </h3>
                    <div className="flex w-full justify-center">

                        <div className="bg-[#00000080] text-xl md:text-[28px] rounded-2xl py-4 px-7 md:px-14 lg:px-20 border border-opacity-30 text-center">
                            <p className="text-white text-[28px] leading-7 mb-5 font-light">
                                Near Mint is a card with minimal handling or play wear. <br /> Up to 3 points of imperfections are allowed of the following types:
                            </p>

                            <div className="grid gap-x-12 justify-items-start justify-center 
                grid-cols-1 sm:grid-rows-2 sm:grid-flow-col sm:auto-cols-max">
                                {[
                                    "Slight Indentation",
                                    "Minor Scratches",
                                    "Slight Edgewear",
                                    "Slight Scuffing",
                                    "Slight Defect",
                                    "",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center text-white mb-2 sm:mb-0">
                                        {item ? (
                                            <>
                                                <span className="w-2 h-2 rounded-full bg-white inline-block mr-3"></span>
                                                <span className="whitespace-nowrap">{item}</span>
                                            </>
                                        ) : null}
                                    </div>
                                ))}
                            </div>

                            <p className="text-white mt-6">
                                See imperfection and scoring guide below
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Imperfections Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl md:text-4xl text-gradient-exo mb-8 text-center">
                        POSSIBLE IMPERFECTIONS TO GRADE OTP CARDS
                    </h3>
                    <div className="max-w-7xl mx-auto relative z-10 mt-8 lg:mt-40">
                        <div className="space-y-12 lg:space-y-0">
                            {imperfections.map((imperfection, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        className={`flex justify-center w-full relative mb-12 lg:mb-48 transition-all duration-800 ${visibleCards.includes(index)
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 -translate-x-12'
                                            }`}
                                    >
                                        <div className="bg-[#00000080] w-full lg:w-[92%] rounded-3xl lg:rounded-full p-6 lg:p-6">
                                            {/* Mobile Layout - Image First, Then Text */}
                                            <div className="flex flex-col lg:hidden items-center gap-6">
                                                {/* IMAGE SECTION - Mobile */}
                                                <div className="flex-shrink-0 w-full flex justify-center">
                                                    <div className="relative w-64 h-80">
                                                        <img
                                                            src={imperfection.image}
                                                            alt={imperfection.title}
                                                            className="w-full h-full object-contain rounded-lg shadow-2xl"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.nextSibling.style.display = 'flex';
                                                            }}
                                                        />


                                                    </div>
                                                </div>

                                                {/* TEXT SECTION - Mobile */}
                                                <div className="flex-1 text-center px-4">
                                                    <h4 className="text-2xl font-exo font-extrabold italic text-white mb-4">
                                                        {imperfection.title}
                                                    </h4>
                                                    <div className="text-[28px] text-white font-teko font-light">

                                                        <p className="mb-4">
                                                            {imperfection.definition}
                                                        </p>
                                                        <p className="">
                                                            {imperfection.terms}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Desktop Layout - Alternating */}
                                            <div className={`hidden lg:flex flex-col gap-6 items-center lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""}`}>
                                                {/* TEXT SECTION - Desktop */}
                                                <div className={`flex-1 ${isEven ? "ml-52" : "text-right mr-56"}`}>
                                                    <h4 className="text-2xl font-exo font-extrabold italic text-white mb-4">
                                                        {imperfection.title}
                                                    </h4>
                                                    <div className="text-white text-[28px] font-teko font-light">

                                                        <p className="mb-10">
                                                            {imperfection.definition}
                                                        </p>
                                                        <p className="">
                                                            {imperfection.terms}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* IMAGE SECTION - Desktop */}
                                                <div className="flex-shrink-0">
                                                    <div className={`absolute w-[318px] z-10 h-[402px] ${isEven
                                                        ? "-top-[30%] -left-[2%] -rotate-[5.11deg]"
                                                        : "-top-[30%] -right-[2%] rotate-[7.9deg]"
                                                        }`}>
                                                        <img
                                                            src={imperfection.image}
                                                            alt={imperfection.title}
                                                            className="w-full h-full object-contain rounded-lg shadow-2xl"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.nextSibling.style.display = 'flex';
                                                            }}
                                                        />
                                                        {/* Fallback placeholder */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-2xl shadow-2xl hidden items-center justify-center">
                                                            <div className="text-center">
                                                                <div className="text-6xl mb-2">⚡</div>
                                                                <div className="text-gray-800 font-bold text-sm px-4">
                                                                    {imperfection.title}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </motion.div>

                {/* Scoring Scale Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl md:text-4xl text-gradient-exo font-bold text-gradient-exo mb-8 text-center">
                        SCORING SCALE AND DEFINITIONS
                    </h3>
                    <div className="max-w-3xl mx-auto">
                        {/* Header Section */}
                        <div className="bg-[#00000080] rounded-2xl p-8 mb-8">
                            <p className="text-white font-teko text-center font-light leading-7 text-[28px]">
                                Each condition allows for a certain amount of &quot; points &quot; of imperfections.
                            </p>
                            <p className="text-white font-teko text-center font-light mb-[21px] text-[28px]">
                                We use the following scale to determine the aggregate impact of imperfections
                            </p>

                            {/* Scoring Scale Line */}
                            <div className="flex flex-wrap items-center justify-center gap-2 text-lg mb-8">
                                <span className="text-green-400 font-exo font-bold">Slight</span>
                                <span className="text-white font-teko">- 1 point</span>
                                <span className="text-yellow-400 font-exo font-bold ml-4">Minor</span>
                                <span className="text-white font-teko">- 2 points</span>
                                <span className="text-orange-400 font-bold font-exo ml-4">Moderate</span>
                                <span className="text-white font-teko">- 4 points</span>
                                <span className="text-red-500 font-bold font-exo ml-4">Major</span>
                                <span className="text-white font-teko">- 8 points</span>
                            </div>

                            {/* Bullet Points */}
                            <ul className="space-y-3 font-teko md:ml-10  font-light text-[28px] leading-7">
                                <li className="text-white flex  items-start">
                                    <span className="mr-3 ">•</span>
                                    <span> Slight: Impacting a Minimal surface area of the card.</span>
                                </li>
                                <li className="text-white flex items-start">
                                    <span className="mr-3 ">•</span>
                                    <span> Minor: Impacting a Noticeable surface area of the card.</span>
                                </li>
                                <li className="text-white flex items-start">
                                    <span className="mr-3 ">•</span>
                                    <span> Moderate: Impacting a Significant surface area of the card.</span>
                                </li>
                                <li className="text-white flex items-start">
                                    <span className="mr-3 ">•</span>
                                    <span> Major: Impacting the surface area of the card above the measures for other severities.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
