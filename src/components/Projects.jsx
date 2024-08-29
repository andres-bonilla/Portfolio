import "../styles/Projects.css";
import { ProjectCard } from "../commons/ProjectCard";

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
          <ProjectCard />
        </li>
        <li className="project-item">
          <ProjectCard />
        </li>
        <li className="project-item">
          <ProjectCard />
        </li>
      </ul>
    </section>
  );
};
