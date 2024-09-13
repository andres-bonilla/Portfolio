import React from "react";

import { AboutText } from "./AboutText";
import { SkillCard } from "./commons/SkillCard";

export const About = ({ aboutText, skills }) => {
  const mapSkills = (list) =>
    list.map((skill, i) => {
      if (25 === i) return;
      return (
        <li key={i}>
          <SkillCard skill={skill} />
        </li>
      );
    });

  return (
    <section id="about">
      <h2 id="about-title">About Me</h2>

      <AboutText summary={aboutText.summary} complete={aboutText.complete} />

      <ul id="skills-list">{mapSkills(skills)}</ul>
    </section>
  );
};
