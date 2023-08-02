import React from "react";

const Text = ({ order, title, text, color }) => {
  return (
    <div
      className={`flex  flex-col text-center h-[437px]  place-content-around tablet:h-[335px] tablet:pb-[30px] tablet:my-[-30px] md:h-[350px]  md:w-[385px] ${order} lg:h-[420px]  lg:w-[512px] lg:mt-[-8px] lg:px-[65px] xl:flex xl:ml-[50px] desktop:text-left desktop:ml-[85px] desktop:pt-[140px]  `}
    >
      <h2 className="w-[220px] mx-auto  font-Fraunces text-2xl mt-[50px] font-black tablet:w-[340px] tablet:text-[22px] lg:text-[36px] lg:w-[410px] desktop:text-[40px] desktop:ml-[-10px] desktop:leading-tight desktop:w-[460px]">
        {title}
      </h2>
      <p className=" px-[33px] mt-[40px]  font-semibold text-Dark-desaturated-cyan text-[16px] tablet:text-[11.5px]  lg:text-[13px] lg:w-[410px] lg:ml-[-30px] desktop:leading-loose desktop:mb-[40px] desktop:text-[15.1px] desktop:w-[460px]">
        {text}
      </p>
      <div className="relative ">
        <button className="  uppercase font-Fraunces   ">Learn More</button>
        <div
          className={`w-[137px] left-0 right-0 mx-auto h-[8px] -z-10 absolute top-[15px]
            rounded-full  desktop:ml-[-10px] ${color} bg-opacity-50`}
        ></div>
      </div>
    </div>
  );
};

export default Text;
