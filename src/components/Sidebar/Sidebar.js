import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import {
  CloseOutline,
  Menu,
  PaperPlaneOutline,
  LogoLinkedin,
  LogoGithub,
} from "react-ionicons";

const Sidebar = () => {
  const {
    state: { sidebar },
    dispatch,
  } = useContext(DataContext);

  const openSidebar = () => {
    dispatch({ sidebar: !sidebar });
  };

  useEffect(() => {
    dispatch({ sidebar: false });
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      <div className="absolute top-5 right-5 md:hidden z-[100] cursor-pointer">
        <Menu
          color={"#fff"}
          width="33px"
          height="30px"
          cssClasses="sm:hidden mt-[21px] right-5 cursor-pointer fixed"
          onClick={() => openSidebar()}
        />
      </div>
      <div
        onClick={() => openSidebar()}
        className={`w-full h-full sm:hidden fixed top-0  bg-transparent z-[150] transition-all duration-[300ms] ${
          sidebar ? `left-0` : `left-[-560px]`
        }`}
      >
        <div className="bg-white w-[340px] h-full absolute top-0 left-0 z-[999] shadow-lg">
          <span
            className="absolute top-5 right-5"
            onClick={() => openSidebar()}
          >
            <CloseOutline
              cssClasses="cursor-pointer"
              width="28px"
              height="28px"
            />
          </span>
          <div className="px-8 pt-12 pb-5 flex items-center justify-center">
            <span className="latin-font text-[30px]">Matin Kahrizi</span>
          </div>
          <div className="py-8 flex flex-col items-center justify-center gap-2">
            {/* <span className="w-full text-center hover:bg-gray-200 py-2 cursor-pointer">
              <span className="text-center w-full hover:bg-NavterDarker transition-all text-[18px] font-medium cursor-pointer">
                About me
              </span>
            </span> */}
            <a
              href="#projects"
              className="text-center w-full hover:bg-gray-200 py-2 transition-all text-[18px] font-medium cursor-pointer"
            >
              <span className="w-full text-center cursor-pointer">
                Projects
              </span>
            </a>
            <span className="w-full text-center hover:bg-gray-200 py-2 cursor-pointer">
              <span className="text-center w-full hover:bg-NavterDarker transition-all text-[18px] font-medium cursor-pointer">
                Resume File
              </span>
            </span>
          </div>
          <div className="text-center w-full flex items-center gap-4 justify-center absolute bottom-8">
            <a href="https://github.com/maricoIR/" target="_blank">
              <LogoGithub cssClasses="cursor-pointer" color={"#1f2937"} />
            </a>
            <a href="https://t.me/Matinkahrizy" target="_blank">
              <PaperPlaneOutline
                color={"#1f2937"}
                cssClasses="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
