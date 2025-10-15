

import Image from 'next/image'
import React from 'react'
import RecentPullsSlider from './RecentPulls'

const PackSlider = () => {



  return (
    <>
      <div className="flex items-center flex-row -space-x-10 sm:-space-x-8 md:-space-x-6  justify-center">
        <div className=' sm:w-[235px] w-[150px] hover:-rotate-7 hover:-translate-x-5 transition-all duration-300  sm:-rotate-[5deg] blur-[1px] md:h-[427px]'>
          <Image
            src="/images/landingPage/openPacks/lorkana.png"
            alt="pokemon"
            width={300}
            height={300}
            className='object-contain'
          />
        </div>

        <div className="relative md:w-[303px] w-[180px] z-10 h-[350px] md:h-[551px]">
          <Image
            src="/images/landingPage/openPacks/pokemon.png"
            alt="pokemon"
            fill
            className="object-contain " // or "object-cover" if you want full coverage
          />
        </div>

        <div className=' sm:w-[235px] w-[150px] hover:rotate-7 hover:translate-x-5 transition-all duration-300 sm:rotate-[5deg] blur-[1px]  md:h-[427px]'>
          <Image
            src="/images/landingPage/openPacks/collector.png"
            alt="pokemon"
            width={300}
            height={300}
            className='object-contain'
          />
        </div>
      </div>
      {/* <RecentPullsSlider /> */}

    </>

  )
}

export default PackSlider