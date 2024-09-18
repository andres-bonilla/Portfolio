import React from "react";

import { AboutText } from "./AboutText";
import { SkillTile } from "./commons/SkillTile";

import { useLang } from "./utils/LangProvider";

export const About = ({ about, skills }) => {
  const { lang } = useLang();

  const mapSkills = (list) =>
    list.map((skill, i) => {
      if (25 === i) return;
      return (
        <li key={i}>
          <SkillTile skill={skill} />
        </li>
      );
    });

  return (
    <section id="about">
      <h2 id="about-title">{lang === "eng" ? "About Me" : "Sobre Mi"}</h2>

      <AboutText
        summary={about[lang].summary}
        complete={about[lang].complete}
      />

      <ul id="skills-list">{mapSkills(skills)}</ul>
    </section>
  );
};
