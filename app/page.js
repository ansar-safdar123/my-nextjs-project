"use client";
import "./style.css";
import { useState } from "react";
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
import Sidebar from "./components/landing-page/Sidebar";

const keyMap = {
  0: "withdraw",
  1: "open",
  2: "sell",
  3: "buy",
  4: "collect",
  5: "back",
};

export default function Home() {
  const [activeKey, setActiveKey] = useState("open");
  const [isOpen, setIsOpen] = useState(false);

  // Inside your Home component, add this ref



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

            <h1 className="font-normal md:leading-8 mt-4 text-glow leading-6 text-[#FFFFFF] text-lg VCR-font-family md:text-[34px] uppercase ">
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
     <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}
