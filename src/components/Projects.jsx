import "../styles/Projects.css";
import { Article } from "../commons/Article";

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="project-grid">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </ul>
    </section>
  );
};
