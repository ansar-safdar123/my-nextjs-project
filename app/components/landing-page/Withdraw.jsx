import Image from "next/image";
import React from "react";

const Withdraw = () => {
  return (
    <>
      <div className="relative ">
        <div className="flex justify-center ">
          <div className="relative w-[700px] -mt-3 h-[156px] md:h-[209px] z-1 arrow-float">
            <Image
              src="/images/landingPage/withdraw/arrowPlan.png"
              alt="arrow plan"
              fill
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="w-[252px] h-[250px] md:h-[406px] box-float">
            <Image
              src="/images/landingPage/withdraw/box.png"
              alt="arror plan"
              fill
              className="object-contain -mt-24 ml-10"
            />
          </div>
        </div>
      
        <div className="absolute cloud-animation top-40 md:top-70 right-0 overflow-hidden h-[209px]">
          <Image
            src="/images/landingPage/withdraw/cloud.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="absolute cloud-animation top-30 right-120 overflow-hidden h-[250px]">
          <Image
            src="/images/landingPage/withdraw/cloud1.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="absolute cloud-animation top-5 right-15 overflow-hidden h-[209px]">
          <Image
            src="/images/landingPage/withdraw/cloud1.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Withdraw;
