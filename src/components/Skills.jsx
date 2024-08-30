import "../styles/Skills.css";
import { SkillCard } from "../commons/SkillCard";

export const Skills = ({ skills }) => {
  return (
    <ul id="skills-list">
      {skills.map((skill, i) => {
        return (
          <li key={i * 5}>
            <SkillCard techName={skill["tech"]} fileName={skill["file-name"]} />
          </li>
        );
      })}
    </ul>
  );
};
