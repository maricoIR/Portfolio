import { useState } from "react";
import SingleProject from "./SingleProject";
import ProjectsModal from "./ProjectsModal";
import { projects } from "../../../../data/projects";

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [modalBody, setModalBody] = useState([]);
  return (
    <div className="projectsLayout" id="projects">
      {modal && <ProjectsModal setModal={setModal} modalBody={modalBody} />}

      {projects.map((project, i) => {
        return (
          <SingleProject
            key={i}
            title={project.title}
            description={project.description}
            links={project.links}
            technologies={project.technologies}
            setModal={setModal}
            setModalBody={setModalBody}
          />
        );
      })}
    </div>
  );
};

export default Projects;
