import { useEffect } from "react";
import { Close } from "react-ionicons";
import Tooltip from "@mui/material/Tooltip";

const ProjectsModal = (props) => {
  useEffect(() => {
    console.log(props.modalBody);
  }, []);

  const checkClick = (e) => {
    if (e.target.localName !== "a") {
      props.setModal(false);
    }
  };

  if (props.modalBody[0].description == "Expense Tracker") {
    return (
      <div
        className="w-full h-full fixed top-0 left-0 z-[200] bg-[#00000094] flex items-center justify-center"
        onClick={(e) => checkClick(e)}
      >
        <div className="absolute top-6 right-6">
          <Close
            color={"#fff"}
            width="43px"
            height="43px"
            cssClasses="cursor-pointer"
          />
        </div>
        <div className="bg-white md:w-[800px] w-[95%] px-5 py-8 rounded-lg shadow-sm flex flex-col items-center justify-center gap-7">
          <span className="py-8 font-semibold text-slate-600">
            Sorry I'm still working on this project ...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-full fixed top-0 left-0 z-[200] bg-[#00000094] flex items-center justify-center"
      onClick={(e) => checkClick(e)}
    >
      <div className="absolute top-6 right-6">
        <Close
          color={"#fff"}
          width="43px"
          height="43px"
          cssClasses="cursor-pointer"
        />
      </div>
      <div className="bg-white md:w-[800px] w-[95%] px-5 py-8 rounded-lg shadow-sm flex flex-col items-start gap-7">
        <span className="text-slate-700 font-medium leading-[30px]">
          {props.modalBody[0].description}
        </span>
        <div className="w-full flex flex-col items-start gap-3">
          <span>Links : </span>
          <div className="w-full flex items-start gap-2">
            {props.modalBody[0].links.map((link, i) => {
              return (
                <>
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    className="z-[350] cursor-pointer underline text-blue-500"
                  >
                    {link.type === "website" && "View Project Online"}
                  </a>
                  {link.type === "github" && (
                    <a
                      href={link.href}
                      target="_blank"
                      className="z-[350] cursor-pointer underline text-blue-500"
                    >
                      View Source Code
                    </a>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <span>Technologies used :</span>
          <div className="w-full flex items-center gap-3">
            {props.modalBody[0].technologies.map((tech, i) => {
              return (
                <Tooltip title={tech.title} placement="top">
                  <img
                    src={tech.image}
                    key={i}
                    alt={tech.title}
                    className="w-12"
                  />
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
