"use client";
import gsap from "gsap";
import Image from "next/image";
import "./style.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Draw from "./components/landing-page/Draw.jsx";
import OpenPacks from "./components/landing-page/OpenPacks.jsx";
import SellCards from "./components/landing-page/SellCards.jsx";
import Buy from "./components/landing-page/Buy";
import Back from "./components/landing-page/Back";
import Collect from "./components/landing-page/Collect";
import Withdraw from "./components/landing-page/Withdraw";
import RecentPullsSlider from "./components/landing-page/RecentPulls";
import CircularMenu from "./home/Nav";

const keyMap = {
  0: "withdraw",
  1: "open",
  2: "sell",
  3: "buy",
  4: "collect",
  5: "back",
};

export default function Home() {
  const cardRef = useRef();
  const [activeKey, setActiveKey] = useState("open");
  const [isOpen, setIsOpen] = useState(false);

  // Inside your Home component, add this ref

  useEffect(() => {
    gsap.context(() => {
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 50,
        scale: 1,
      });
      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power4.out",
        delay: 0.8,
      });
    });
  }, []);

  const handleMenuChange = (index) => {
    const key = keyMap[index];
    if (key) {
      setActiveKey(key);
    }
  };

  const renderContent = () => {
    switch (activeKey) {
      case "draw":
        return <Draw />;
      case "open":
        return <OpenPacks />;
      case "sell":
        return <SellCards />;
      case "buy":
        return <Buy />;
      case "collect":
        return <Collect />;
      case "back":
        return <Back />;
      case "withdraw":
        return <Withdraw />;
      default:
        return <OpenPacks />;
    }
  };
  const tabTitles = {
    withdraw: "WITHDRAW",
    open: "OPEN PACK",
    sell: "SELL CARDS",
    buy: "BUY CARDS",
    collect: "COLLECT",
    back: "SELL BACK",
  };

  const currentTitle = tabTitles[activeKey] || "OPEN PACK";

  return (
    <>
      <div className="home md:min-h-screen">
        {/* px-3 sm:px-7 md:px-20 */}
        <div className="text-white ">
          <h1 className="text-center pt-2 VCR-font-family">
            WELCOME TO OPENTHATPACK
          </h1>

          <CircularMenu
            onMenuChange={handleMenuChange}
            activeIndex={Object.values(keyMap).indexOf(activeKey)}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="z-50"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex font-exo space-x-5 items-end px-8 md:px-20  pb-4 text-white justify-between">
          <div className="custom-h lg:w-[40%] md:-mt-40 w-full relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-lg VCR-font-family md:text-2xl mb-1 font-vcr"
              >
                {`//${currentTitle}`}
              </motion.p>
            </AnimatePresence>

            <h1 className="font-normal md:leading-8 mt-4 text-glow leading-6 text-[#FFFFFF] text-xl VCR-font-family md:text-[34px] uppercase ">
              Virtually Open Packs with a wide range of brands etc etc text
            </h1>
          </div>
          <div
            className={`fixed z-[99999] bg-black/60 bottom-5 right-6 md:right-16  transition-opacity duration-500 `}
          >
            <button
              className="sticky-button relative w-10 h-10 md:w-12 md:h-[50px] border-2 border-white overflow-hidden group "
              onClick={() => setIsOpen(true)}
            >
              {/* Hover background that slides up */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

              {/* Menu lines */}
              <div className="relative flex flex-col items-center justify-center h-full space-y-1 md:space-y-2">
                <div className="w-5 md:w-7 h-0.5 bg-white group-hover:bg-gray-900 transition-colors duration-500"></div>
                <div className="w-5 md:w-7 h-0.5 bg-white group-hover:bg-gray-900 transition-colors duration-500"></div>
                <div className="w-5 md:w-7 h-0.5 bg-white group-hover:bg-gray-900 transition-colors duration-500"></div>
              </div>
            </button>
          </div>
        </div>
        {activeKey === "open" && (
          <h1 className="text-center text-white VCR-font-family font-normal text-sm px-2 sm:text-2xl drop-shadow-[0_0_6px_rgba(255,255,255,0.6) mb-5 mt-8 md:mt-12 2xl:mt-20 ">
            SCROLL TO SEE RECENT PULLS
          </h1>
        )}
      </div>

      {activeKey === "open" && <RecentPullsSlider />}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] md:w-[375px] font-exo bg-[#EBEBEB] z-50 shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 z-50 right-4 text-2xl"
        >
          ✕
        </button>

        {/* Sidebar Content */}
        <div className="p-6 font-teko relative flex flex-col font-normal md:gap-4 gap-3 text-[#4E46CB] text-lg md:text-2xl">
          <div className="w-[120px]  md:w-[141px] md:h-[87px] relative my-4">
            <Image
              src="/images/sideMenuBar/logo1.png"
              className="object-contain"
              alt="menu"
              fill
            />
          </div>
          <a
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            SHOP
          </a>
          <a
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            MARKETPLACE
          </a>
          <a
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            HOW IT WORKS
          </a>
          <a
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            QUALITY
          </a>
          <a
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            FAIRNESS
          </a>
          <a
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            FAQS
          </a>
        </div>
        <div className="flex md:absolute bottom-10 items-center mt-5 gap-5 px-6">
          <button className="border text-sm border-[#4E46CB] px-3 md:px-8 py-2 text-[#4E46CB] rounded-full ">
            ONE CLICK LOGIN
          </button>
          <div className="flex items-center justify-center bg-gray-900">
            <button
              className="sticky-button relative w-10 h-10 md:w-12 md:h-[50px] border-2 border-white overflow-hidden group "
              onClick={() => setIsOpen(false)}
            >
              {/* Hover background that slides up */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

              {/* Menu lines */}
              <div className="relative flex flex-col items-center justify-center h-full space-y-1 md:space-y-2">
                <div className="w-5 md:w-7 h-0.5 bg-white group-hover:bg-gray-900 transition-colors duration-500"></div>
                <div className="w-5 md:w-7 h-0.5 bg-white group-hover:bg-gray-900 transition-colors duration-500"></div>
                <div className="w-5 md:w-7 h-0.5 bg-white group-hover:bg-gray-900 transition-colors duration-500"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
