"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function FairnessCard({
    id,
    name,
    series,
    image,
    odds,
    isActive,
    onClick,
}) {
    return (
        <div className="relative w-xs sm:w-sm font-exo italic cursor-pointer" onClick={onClick}>
            <motion.div
                layout
                transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
                className={`hover:overflow-hidden hover:rounded-xl hover:shadow-lg hover:bg-[#000008]/20 hover:backdrop-blur-lg transition-all duration-700 ${isActive
                        ? "rounded-xl shadow-xl bg-[#000008]/60 backdrop-blur-lg py-4 pr-4"
                        : "p-2"
                    }`}
            >
                <div className={`flex flex-col sm:flex-row justify-center sm:justify-start  min-w-full items-center ${isActive ? "" : "items-center"}`}>
                    <motion.div
                        layout
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        animate={{
                            width: isActive ? 192 : 60,
                        }}
                        className="aspect-[3/4] flex-shrink-0 rounded-md overflow-hidden relative"
                    >
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-contain rounded-md"
                        />
                    </motion.div>


                    <div className="w-[60%]">
                        <motion.div layout className="mt-3 text-center sm:text-left">
                            <h3 className="font-extrabold  italic leading-5 -mt-2 font-exo text-lg md:text-[20px]">
                                {name}
                            </h3>
                            <p className="font-extrabold italic font-exo text-xs md:text-sm">
                                {series}
                            </p>
                        </motion.div>

                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    key="expanded"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="mt-4 space-y-3 text-sm"
                                >
                                    <div className="flex font-teko text-[17px] uppercase justify-center gap-3">
                                        <button
                                            className="px-4 py-1 text-white rounded-full transition-all duration-200 bg-[#00000080] border border-gray-500 hover:text-white hover:bg-gray-700"
                                        >
                                            View Set
                                        </button>
                                        <button
                                            className="px-4 py-1 text-white rounded-full transition-all duration-200 bg-[#00000080] border border-gray-500 hover:text-white hover:bg-gray-700"
                                        >
                                            Shop
                                        </button>
                                    </div>

                                    <div className="w-full">
                                        <h4 className="text-white font-exo text-xl tracking-widest mb-1">
                                            ODDS
                                        </h4>
                                        <table className="!w-full text-white text-lg font-teko">
                                            <tbody className="w-full">
                                                {odds.map((o, index) => (
                                                    <tr key={index} className="border-b w-full border-gray-700">
                                                        <td className="py-[2px]">{o.label}</td>
                                                        <td className="text-right">{o.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}