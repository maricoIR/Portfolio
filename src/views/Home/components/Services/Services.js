import React from "react";

const Services = () => {
  return (
    <div className="bg-lightBg w-full h-[600px] z-[200]">
      <div className="flex flex-col items-center gap-6 px-14 mt-5">
        <span className="text-black font-[700] text-[35px]">My jounery</span>
        <div className="flex flex-col items-start gap-[6px]">
          <span className="font-normal text-[14px] text-black">
            I'm a Front-End web developer who loves
          </span>
          <span className="font-normal text-[14px] text-black">
            designing and creating wonderfull products.
          </span>
          <span className="font-normal text-[14px] text-black">
            I started this jounery about 3 years ago
          </span>
          <span className="font-normal text-[14px] text-black">
            and I believe there is no limitations for me
          </span>
          <span className="font-normal text-[14px] text-black">
            to learn new things.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
