import React from "react";
import Rsoon from "../../../../assets/images/Rsoon.png";

const Projects = () => {
  return (
    <div className="bg-white relative top-[100vh] z-[100] min-h-screen w-full px-14 py-12 flex items-center gap-8 justify-between flex-wrap">
      <div className="flex flex-col items-start gap-3 cursor-pointer">
        <div className=" bg-[#383b92] z-[100] w-[400px] h-[300px] relative rounded-md">
          <div className="absolute bottom-0 w-full h-14 bg-[#192a3c] flex items-center justify-center rounded-bl-md rounded-br-md">
            <span className="text-white font-[600] text-[18px]">
              Nices miles studio
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 cursor-pointer">
        <div className="bg-[#383b92] z-[100] w-[400px] h-[300px] relative rounded-md">
          <div className="absolute bottom-0 w-full h-14 bg-[#192a3c] flex items-center justify-center rounded-bl-md rounded-br-md">
            <span className="text-white font-[600] text-[18px]">Rsoon</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 cursor-pointer">
        <div className="bg-[#383b92] z-[100] w-[400px] h-[300px] relative rounded-md">
          <div className="absolute bottom-0 w-full h-14 bg-[#192a3c] flex items-center justify-center rounded-bl-md rounded-br-md">
            <span className="text-white font-[600] text-[18px]">
              Admin Dashboard
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 cursor-pointer">
        <div className="bg-[#192a3c] z-[100] w-[400px] h-[300px] relative rounded-md flex items-center justify-center">
          <span className="text-white font-[600] text-[22px]">Todo App</span>
          <div className="absolute bottom-0 w-full h-14 bg-[#192a3c] flex items-center justify-center rounded-bl-md rounded-br-md">
            {/* <span className="text-white font-[600] text-[18px]">Todo App</span> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 cursor-pointer">
        <div className="bg-[#383b92] z-[100] w-[400px] h-[300px] relative rounded-md">
          <div className="absolute bottom-0 w-full h-14 bg-[#192a3c] flex items-center justify-center rounded-bl-md rounded-br-md">
            <span className="text-white font-[600] text-[18px]">
              Expense Tracker
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 cursor-pointer">
        <div className="bg-[#383b92] z-[100] w-[400px] h-[300px] relative rounded-md">
          <div className="absolute bottom-0 w-full h-14 bg-[#192a3c] flex items-center justify-center rounded-bl-md rounded-br-md">
            <span className="text-white font-[600] text-[18px]">
              Inventory App
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
