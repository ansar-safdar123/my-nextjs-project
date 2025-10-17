// import Image from "next/image";
// import React from "react";

// const Withdraw = () => {
//   return (
//     <>
//       <div className="relative w-full">
//         <div className="flex justify-center ">
//           <div className="relative w-[700px] -mt-3 h-[156px] md:h-[209px] z-1 arrow-float">
//             <Image
//               src="/images/landingPage/withdraw/arrowPlan.png"
//               alt="arrow plan"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//         <div className="flex justify-center  ">
//           <div className="md:w-[452px] w-[130px] h-[240px] md:h-[306px] box-float">
//             <Image
//               src="/images/landingPage/withdraw/box.png"
//               alt="arror plan"
//               fill
//               className="object-contain -mt-24 ml-10"
//             />
//           </div>
//         </div>

//         <div className="absolute cloud-animation -top-15 md:top-70 right-[900px] overflow-hidden h-[309px]">
//           <Image
//             src="/images/landingPage/withdraw/cloud.png"
//             alt="arror plan"
//             width={300}
//             height={300}
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//         <div className="absolute cloud-animation1 -top-5 md:top-120 right-0 overflow-hidden h-[309px]">
//           <Image
//             src="/images/landingPage/withdraw/cloud.png"
//             alt="arror plan"
//             width={300}
//             height={300}
//             className="w-full h-auto"
//             priority
//           />
//         </div>
//         <div className="absolute cloud-animation top-10 md:top-40 left-[50%] overflow-hidden h-[259px]">
//           <Image
//             src="/images/landingPage/withdraw/cloud.png"
//             alt="arror plan"
//             width={300}
//             height={300}
//             className="w-full h-auto opacity-65"
//             priority
//           />
//         </div>
//         <div className="absolute cloud-animation top-10 left-90 overflow-hidden w-[350px] h-[350px]">
//           <Image
//             src="/images/landingPage/withdraw/cloud1.png"
//             alt="arror plan"
//             width={300}
//             height={300}
//             className="w-full h-auto  opacity-25"
//             priority
//           />
//         </div>
//         <div className="absolute cloud-animation top-0 right-0 overflow-hidden md:w-[400px] h-[299px]">
//           <Image
//             src="/images/landingPage/withdraw/cloud1.png"
//             alt="arror plan"
//             width={300}
//             height={300}
//             className="w-full"
//             priority
//           />
//         </div>
//         <div className="absolute cloud-animation bottom-0 right-15 overflow-hidden w-[350px] h-[309px]">
//           <Image
//             src="/images/landingPage/withdraw/cloud1.png"
//             alt="arror plan"
//             width={300}
//             height={300}
//             className="w-full  opacity-90"
//             priority
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Withdraw;



import React from "react";

const Withdraw = () => {
  return (
    <>
      <style>
        {`
          /* Keyframes updated for faster speed and ensuring the cloud starts/ends fully off-screen */
          @keyframes cloudMove {
            /* Start: 100vw ensures the cloud's left edge is at the right edge of the screen. 
               We need to push it slightly further (e.g., +10vw) to ensure the cloud is fully hidden initially. */
            0% {
              transform: translateX(110vw); /* Start fully off-screen to the right */
            }
            /* End: -110vw ensures the cloud's right edge is past the left edge of the screen, 
               preventing any "cutting" or flickering. */
            100% {
              transform: translateX(-110vw); /* Move fully off-screen to the left */
            }
          }

          /* Base animation class: duration reduced to 20s (faster) */
          .cloud-move {
            animation: cloudMove 2s linear infinite; 
          }

          /* Delay classes: Adjusted for the new 20s duration (20s / 6 clouds ≈ 3.33s difference) */
          .delay-0 { animation-delay: 0s; }
          .delay-1 { animation-delay: -3.33s; } 
          .delay-2 { animation-delay: -6.66s; }
          .delay-3 { animation-delay: -9.99s; }
          .delay-4 { animation-delay: -13.32s; }
          .delay-5 { animation-delay: -16.65s; }
          
          /* Floating animation for arrow and box */
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .arrow-float {
              animation: float 5s ease-in-out infinite;
          }
          .box-float {
              animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="relative w-full mt-10 custom-h md:my-0 -mb-20">
        {/* --- Non-Cloud Elements (Switched to standard <img> tag) --- */}
        <div className="flex justify-center ">
          <div className="relative w-[700px] -mt-3 h-[156px] md:h-[209px] z-1 arrow-float">
            <img
              src="/images/landingPage/withdraw/arrowPlan.png"
              alt="arrow plan"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:w-[452px] w-[130px] h-[240px] md:h-[306px] box-float">
            <img
              src="/images/landingPage/withdraw/box.png"
              alt="arror plan"
              className="object-contain -mt-24 ml-10 w-full h-full"
            />
          </div>
        </div>

        {/* --- Cloud Elements: All <Image> replaced with standard <img> tags --- */}
        
        {/* 1. Cloud 1 -> cloud-move delay-0 */}
        <div className="absolute cloud-move delay-0 -top-15 md:top-70 right-[900px] overflow-hidden h-[309px]">
          <img
            src="/images/landingPage/withdraw/cloud.png"
            alt="cloud 1"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
        
        {/* 2. Cloud 2 -> cloud-move delay-1 */}
        <div className="absolute cloud-move delay-1 -top-5 md:top-120 right-0 overflow-hidden h-[309px]">
          <img
            src="/images/landingPage/withdraw/cloud.png"
            alt="cloud 2"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
        
        {/* 3. Cloud 3 -> cloud-move delay-2 */}
        <div className="absolute cloud-move delay-2 top-10 md:top-40 left-[50%] overflow-hidden h-[259px]">
          <img
            src="/images/landingPage/withdraw/cloud.png"
            alt="cloud 3"
            width={300}
            height={300}
            className="w-full h-auto opacity-65"
          />
        </div>
        
        {/* 4. Cloud 4 -> cloud-move delay-3 (Position fixed from left-90 to left-[360px]) */}
        <div className="absolute cloud-move delay-3 top-10 left-[360px] overflow-hidden w-[350px] h-[350px]">
          <img
            src="/images/landingPage/withdraw/cloud1.png"
            alt="cloud 4"
            width={300}
            height={300}
            className="w-full h-auto opacity-25"
          />
        </div>
        
        {/* 5. Cloud 5 -> cloud-move delay-4 */}
        <div className="absolute cloud-move delay-4 top-0 right-0 overflow-hidden md:w-[400px] h-[299px]">
          <img
            src="/images/landingPage/withdraw/cloud1.png"
            alt="cloud 5"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        
        {/* 6. Cloud 6 -> cloud-move delay-5 */}
        <div className="absolute cloud-move delay-5 bottom-0 right-15 overflow-hidden w-[350px] h-[309px]">
          <img
            src="/images/landingPage/withdraw/cloud1.png"
            alt="cloud 6"
            width={300}
            height={300}
            className="w-full opacity-90"
          />
        </div>
      </div>
    </>
  );
};

export default Withdraw;
