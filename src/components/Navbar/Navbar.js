import { useEffect } from "react";

const Navbar = () => {
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
    <div className="w-full h-20 sm:px-14 px-8 flex items-center justify-between fixed top-5 z-[51]">
      <span className="font-medium text-white text-lg sm:w-[120px] w-[119px] cursor-pointer">
        Matin Kahrizi
      </span>

      <ul className="sm:flex items-center gap-8 list-none [&>li]:font-medium hidden">
        {/* <li className="text-white cursor-pointer text-[15px]">About me</li> */}
        <a
          href="#projects"
          id="projectScroll"
          className="text-white cursor-pointer text-[15px]"
        >
          Projects
        </a>
        <li className="text-white cursor-pointer text-[15px]">Resume File</li>
      </ul>
    </div>
  );
};

export default Navbar;
