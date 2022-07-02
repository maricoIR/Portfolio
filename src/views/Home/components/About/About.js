import React from "react";

const About = () => {
  return (
    <div className="w-fit flex flex-col items-start gap-12 absolute left-14 top-48">
      <div className="flex flex-col items-start">
        <span className="font-bold text-[48px] text-white">MATIN KAHRIZI</span>
      </div>
      <div className="flex flex-col items-start">
        <span className="font-normal text-[12px] text-white mb-2">
          // ABOUT ME
        </span>
        <span className="font-semibold text-lg text-white">
          Experienced web developer working
        </span>
        <span className="font-semibold text-lg text-white">
          remotely from Iran, Karaj.
        </span>
        <div className="flex flex-col items-start gap-[3px] mt-5">
          <span className="font-normal text-[14px] text-white">
            I'm a Front-End web developer who loves
          </span>
          <span className="font-normal text-[14px] text-white">
            designing and creating wonderfull products.
          </span>
          <span className="font-normal text-[14px] text-white">
            I started this jounery about 3 years ago
          </span>
          <span className="font-normal text-[14px] text-white">
            and I believe there is no limitations for me
          </span>
          <span className="font-normal text-[14px] text-white">
            to learn new things.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
