import React from "react";
import bg from "../../../../assets/images/bg.jpg";
import Navbar from "../../../../components/Navbar/Navbar";
import { LogoGithub, LogoLinkedin, PaperPlaneOutline } from "react-ionicons";

export default function LandingV2() {
  return (
    <div
      className="w-full fixed h-screen object-cover bg-cover z-[50]"
      style={{ backgroundImage: `url(${bg})`, backgroundAttachment: `fixed` }}
    >
      <Navbar />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-60"
        style={{
          backgroundImage: `linear-gradient( 105.3deg,  rgba(30,39,107,1) 21.8%, rgba(77,118,221,1) 100.2% )`,
        }}
      ></div>
      <div className="fixed z-[5] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
        <span className="text-white font-[800] text-[60px] leading-[65px] sm:mb-0 mb-4">
          MATIN KAHRIZI
        </span>

        <span className="text-white font-[500] text-lg">
          Experienced Front-end Developer
        </span>
      </div>
      <div className="absolute sm:left-14 left-8 bottom-7 flex items-center gap-5">
        <a href="https://github.com/maricoIR/" target="_blank" rel="noreferrer">
          <LogoGithub
            color={"#fff"}
            width="23px"
            height="23px"
            cssClasses="cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/matin-kahrizi-17344288"
          target="_blank"
          rel="noreferrer"
        >
          <LogoLinkedin
            color={"#fff"}
            width="23px"
            height="23px"
            cssClasses="cursor-pointer"
          />
        </a>
        <a href="https://t.me/Matinkahrizy" target="_blank" rel="noreferrer">
          <PaperPlaneOutline
            color={"#fff"}
            width="23px"
            height="23px"
            cssClasses="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
