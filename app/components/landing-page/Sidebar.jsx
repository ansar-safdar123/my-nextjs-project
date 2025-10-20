import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({isOpen, setIsOpen}) => {
  return (
    <>

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
          <Link
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            SHOP
          </Link>
          <Link
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            MARKETPLACE
          </Link>
          <Link
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            HOW IT WORKS
          </Link>
          <Link
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            QUALITY
          </Link>
          <Link
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            FAIRNESS
          </Link>
          <Link
            href="#"
            className="px-3 rounded-lg text-[#4E46CB] md:text-3xl hover:scale-[1.01] transition hover:text-black duration-300"
          >
            FAQS
          </Link>
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
  )
}

export default Sidebar
