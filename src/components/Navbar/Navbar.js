import React from "react";
import { Menu } from "react-ionicons";

const Navbar = () => {
  return (
    <div className="w-full h-20 sm:px-14 px-8 flex items-center justify-between fixed top-5 z-[51]">
      <span className="font-medium text-white text-lg sm:w-[120px] w-[119px] cursor-pointer">
        Matin Kahrizi
      </span>
      <Menu
        color={"#fff"}
        width="30px"
        height="30px"
        cssClasses="sm:hidden mt-[-9px] cursor-pointer"
      />
      <ul className="sm:flex items-center gap-8 list-none [&>li]:font-medium hidden">
        <li className="text-white cursor-pointer text-[15px]">About me</li>
        <li className="text-white cursor-pointer text-[15px]">Projects</li>
        <li className="text-white cursor-pointer text-[15px]">
          Work experiences
        </li>
        <li className="text-white cursor-pointer text-[15px]">Skills</li>
      </ul>
    </div>
  );
};

export default Navbar;
