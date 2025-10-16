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
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="md:w-[452px] w-[130px] h-[240px] md:h-[306px] box-float">
            <Image
              src="/images/landingPage/withdraw/box.png"
              alt="arror plan"
              fill
              className="object-contain -mt-24 ml-10"
            />
          </div>
        </div>

        <div className="absolute cloud-animation -top-15 md:top-70 right-0 overflow-hidden h-[209px]">
          <Image
            src="/images/landingPage/withdraw/cloud.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="absolute cloud-animation -top-5 md:top-120 right-0 overflow-hidden h-[209px]">
          <Image
            src="/images/landingPage/withdraw/cloud.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="absolute cloud-animation top-10 md:top-40 -right-50 overflow-hidden h-[259px]">
          <Image
            src="/images/landingPage/withdraw/cloud.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full h-auto opacity-65"
            priority
          />
        </div>
        <div className="absolute cloud-animation top-10 left-65 overflow-hidden w-[350px] h-[350px]">
          <Image
            src="/images/landingPage/withdraw/cloud1.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full h-auto  opacity-25"
            priority
          />
        </div>
        <div className="absolute cloud-animation top-20 -right-15 overflow-hidden md:w-[400px] h-[209px]">
          <Image
            src="/images/landingPage/withdraw/cloud1.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full"
            priority
          />
        </div>
        <div className="absolute cloud-animation -bottom-50 right-15 overflow-hidden w-[350px] h-[309px]">
          <Image
            src="/images/landingPage/withdraw/cloud1.png"
            alt="arror plan"
            width={300}
            height={300}
            className="w-full  opacity-90"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Withdraw;
