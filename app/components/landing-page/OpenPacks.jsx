

import Image from 'next/image'
import React from 'react'

const PackSlider = () => {



  return (
    <>
      <div className="flex  flex-row -space-x-10 sm:-space-x-8 md:-space-x-6  justify-center">
        <div className=' sm:w-[170px] w-[130px] hover:-rotate-7 hover:-translate-x-5 transition-all duration-300  sm:-rotate-[5deg] blur-[2px] hover:blur-[0] h-[200] mt-7 sm:mt-0 md:h-[300px]'>
          <Image
            src="/images/landingPage/openPacks/lorkana.png"
            alt="pokemon"
            width={300}
            height={300}
            className='object-contain'
          />
        </div>

        <div className="relative sm:w-[200px] w-[150px] z-10 h-[300px]  lg:-mt-24 md:h-[490px]">
          <Image
            src="/images/landingPage/openPacks/pokemon.png"
            alt="pokemon"
            fill
            className="object-contain " // or "object-cover" if you want full coverage
          />
        </div>

        <div className=' sm:w-[170px] w-[130px] hover:rotate-7 hover:translate-x-5 transition-all duration-300 mt-7 sm:mt-0 sm:rotate-[5deg] blur-[2px] hover:blur-[0]  h-[200] md:h-[300px]'>
          <Image
            src="/images/landingPage/openPacks/collector.png"
            alt="pokemon"
            width={300}
            height={300}
            className='object-contain'
          />
        </div>
      </div>

    </>

  )
}

export default PackSlider