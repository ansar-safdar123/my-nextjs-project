// pages/404.js
import Link from "next/link";
import "./style.css"
import Image from "next/image";

export default function Custom404() {
    return (
        <div className="flex  flex-col items-center justify-center center-vignette min-h-screen bg-[#1E1E1E] text-white px-3 md:px-6 ">
        <h1 className="font-teko font-bold z-50 text-center text-3xl md:text-5xl uppercase ">
          Oops, we can’t find this page
        </h1>
      
        <div className="flex items-center md:-my-10 justify-center relative px-3 md:px-8">
          {/* Left 4 with black shadow */}
          <h1 className="text-[150px] md:text-[300px] italic text-[#FFFFFF] font-exo font-extrabold m-0 p-0 relative -ml-5 md:ml-0  -rotate-6 z-10 four-shift-left">
          {/* m-0 md:mr-3  */}
            4
          </h1>
      
          {/* Center image */}
          {/* -ml-5 md:ml-0  */}
          <div className="relative w-[120px] -ml-3 md:ml-0 h-[150px] md:w-[170px] md:h-[270px] z-30 pack-shadow">
            <Image
              src="/images/error404/pack1.png"
              alt="Open That Pack"
              fill
              className="object-contain relative z-10"
            />
          </div>
      
          {/* Right 4 with black shadow */}
          {/* m-0 mr-0 */}
          <h1 className="-ml-7 md:-ml-8 text-[150px] md:text-[300px] italic text-[#FFFFFF] font-exo font-extrabold rotate-6 relative z-10 m-0 four-shift-right">
            4
          </h1>
        </div>
      
        <Link
          href="/"
          className=" md:w-[240px] font-exo z-50 text-center px-6 py-2 md:py-3 bg-gradient-to-b from-[#FFD84D] to-[#D8A800] text-[#2C3754] font-extrabold rounded-full italic  hover:scale-105 md:text-[21px] transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
        >
          Go Back Home
        </Link>
      </div>
      
    );
}
