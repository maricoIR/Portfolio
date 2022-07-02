import React from "react";
import { LogoGithub, LogoInstagram, LogoWhatsapp } from "react-ionicons";

const Navbar = () => {
  return (
    <div className="w-full h-20 shadow-md px-14 flex items-center justify-between">
      <span className="font-semibold text-textClr text-lg">Matin Kahrizi</span>
      <ul className="flex items-center gap-10 list-none [&>li]:font-medium">
        <li className="text-blue-700">About me</li>
        <li className="text-textClr">Projects</li>
        <li className="text-textClr">Work experiences</li>
        <li className="text-textClr">Skills</li>
      </ul>
      <div className="flex items-center gap-5">
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
      </div>
    </div>
  );
};

export default Navbar;
