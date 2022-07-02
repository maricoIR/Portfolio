import React from "react";
import { LogoGithub, LogoLinkedin, LogoWhatsapp } from "react-ionicons";

const Socials = () => {
  return (
    <div className="w-full flex items-center justify-between px-14 top-[35%] absolute">
      <div className="flex items-center gap-2">
        <LogoGithub color={"#7f7d86"} width="39px" height="39px" />
        <span className="font-bold text-[25px] text-socialClr">Github</span>
      </div>
      <div className="flex items-center gap-2">
        <LogoLinkedin color={"#7f7d86"} width="39px" height="39px" />
        <span className="font-bold text-[25px] text-socialClr">Linkedin</span>
      </div>
      <div className="flex items-center gap-2">
        <LogoGithub color={"#7f7d86"} width="39px" height="39px" />
        <span className="font-bold text-[25px] text-socialClr">Github</span>
      </div>
      <div className="flex items-center gap-2">
        <LogoWhatsapp color={"#7f7d86"} width="39px" height="39px" />
        <span className="font-bold text-[25px] text-socialClr">Whatsapp</span>
      </div>
    </div>
  );
};

export default Socials;
