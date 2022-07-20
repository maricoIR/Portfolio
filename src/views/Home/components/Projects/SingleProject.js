const SingleProject = (props) => {
  return (
    <div
      className="flex flex-col md:items-start items-center w-full gap-3 cursor-pointer"
      onClick={() => {
        props.setModal(true);
        props.setModalBody([
          {
            description: props.description,
            technologies: props.technologies,
            links: props.links,
          },
        ]);
      }}
    >
      <div className="gradient z-[100] md:w-[400px] w-[85vw] h-[300px] relative rounded-md flex items-center justify-center overflow-hidden">
        <div className="absolute bg-[#ffffffa1] rounded-bl-md rounded-br-md top-0 left-1/2 translate-x-[-50%] w-[300px] h-6 flex items-center justify-center">
          <span className="text-slate-600 text-[13.5px] font-semibold">
            Click to see project's details
          </span>
        </div>
        <span className="text-white font-[600] text-[21px]">{props.title}</span>
      </div>
    </div>
  );
};

export default SingleProject;
