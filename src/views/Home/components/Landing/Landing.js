import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";
import About from "./components/About/About";
import LandingImage from "./components/LandingImage/LandingImage";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <div className="flex items-center justify-center h-[85vh]">
          <Navbar />
          <div className="h-full bg-homeLight w-1/2">
            <About />
          </div>
          <div className="h-full bg-homeDark w-1/2 relative">
            <LandingImage />
          </div>
        </div>
        <div className="h-[15vh] w-full bg-account relative">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Landing;
