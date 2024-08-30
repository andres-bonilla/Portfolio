import "../styles/Projects.css";
import { ProjectCard } from "../commons/ProjectCard";

export const Projects = ({ projects, lang }) => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/*<p>
        If you have any advice for my projects, I'll be eager to receive your
        feedback!
      </p> */}

      <ul className="project-grid">
        {projects.map((data, i) => {
          return (
            <li key={i * 15} className="project-item">
              <ProjectCard projectData={data} lang={lang} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
