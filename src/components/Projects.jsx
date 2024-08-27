import "../styles/Projects.css";
import { ProjectItem } from "../commons/ProjectItem";

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/*<p>
        If you have any advice for my projects, I'll be eager to receive your
        feedback!
      </p> */}

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
