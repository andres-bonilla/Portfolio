import "../styles/components/about.css";

import React, { useState } from "react";
import { SkillCard } from "./commons/SkillCard";
import { ArrowButton } from "./commons/ArrowButton";

export const About = ({ aboutText, skills }) => {
  const [showMore, setShowMore] = useState(false);

  const setTipText = () => setShowMore(!showMore);

  const mapParagraphs = (list) =>
    list.map((text, i) => {
      return (
        <p key={i} className="about-text">
          {text}
        </p>
      );
    });

  const mapSkills = (list) =>
    list.map((skill, i) => {
      return (
        <li key={i}>
          <SkillCard skill={skill} />
        </li>
      );
    });

  return (
    <section id="about">
      <h2 id="about-title">About Me</h2>

      {mapParagraphs(aboutText.summary)}

      <div className={`text-container-${showMore ? "show" : "hide"}`}>
        {showMore && mapParagraphs(aboutText.complete)}
      </div>

      <ArrowButton setParentState={setTipText} buttonClass="about-button" />

      <ul id="skills-list">{mapSkills(skills)}</ul>
    </section>
  );
};
