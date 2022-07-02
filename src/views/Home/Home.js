import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";
import About from "./components/About/About";
import Picture from "../../assets/images/man.png";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex items-center justify-center h-[85vh]">
          <Navbar />
          <div className="h-full bg-homeLight w-1/2">
            <About />
          </div>
          <div className="h-full bg-homeDark w-1/2 relative">
            <img
              src={Picture}
              className="absolute bottom-0 w-[47%] left-[26%] z-[50]"
            />
          </div>
        </div>
        <div className="h-[15vh] w-full bg-account relative">
          <Socials />
        </div>
      </div>
      <div className="bg-lightBg w-full h-[600px]"></div>
    </>
  );
};

export default Home;
