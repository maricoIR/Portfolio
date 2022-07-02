import React from "react";
import { LogoGithub, LogoInstagram, LogoWhatsapp } from "react-ionicons";

const Navbar = () => {
  return (
    <div className="w-full h-20 px-14 flex items-center justify-between absolute top-5 z-[51]">
      <span className="font-medium text-white text-lg">Matin Kahrizi</span>
      <ul className="flex items-center gap-8 list-none [&>li]:font-medium">
        <li className="text-white cursor-pointer text-[15px]">About me</li>
        <li className="text-white cursor-pointer text-[15px]">Projects</li>
        <li className="text-white cursor-pointer text-[15px]">
          Work experiences
        </li>
        <li className="text-white cursor-pointer text-[15px]">Skills</li>
      </ul>
      {/* <div className="flex items-center gap-5">
        <LogoGithub
          className="primarySvg cursor-pointer"
          width="22px"
          height="22px"
        />
        <LogoWhatsapp
          className="primarySvg cursor-pointer"
          width="22px"
          height="22px"
        />
        <LogoInstagram
          className="primarySvg cursor-pointer"
          width="22px"
          height="22px"
        />
      </div> */}
    </div>
  );
};

export default Navbar;
