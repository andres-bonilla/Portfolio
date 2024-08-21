import "../styles/Projects.css";
import { ProjectItem } from "../commons/ProjectItem";

export const Projects = () => {
  return (
    <section id="projects">
      <h2 id="project-title">
        <span className="project-title-space"></span>
        <span id="project-title-text">
          <span id="project-title-text-left">My</span>
          <span id="project-title-text-right">Projects</span>
        </span>
        <span className="project-title-space"></span>
      </h2>
      {/*<p>
        If you have any advice for my projects, I'll be eager to receive your
        feedback!
      </p>
     <h2>Projects</h2>
       */}
      <ul className="project-grid">
        <li className="project-item">
          <ProjectItem />
        </li>
        <li className="project-item">
          <ProjectItem />
        </li>
        <li className="project-item">
          <ProjectItem />
        </li>
      </ul>
    </section>
  );
};
