import "../styles/components/about.css";

import React, { useState } from "react";
import { SkillCard } from "./commons/SkillCard";

export const About = ({ aboutText, skills }) => {
  const [showMore, setShowMore] = useState(false);
  const [buttonText, setButtonText] = useState("More");

  const handleClick = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
    setButtonText(buttonText === "More" ? "Less" : "More");
  };

  const mapParagraphs = (list) =>
    list.map((text, i) => {
      return (
        <p key={i * 50} className="about-text">
          {text}
        </p>
      );
    });

  const mapSkills = (list) =>
    list.map((skill, i) => {
      return (
        <li key={i * 5}>
          <SkillCard skill={skill} />
        </li>
      );
    });

  return (
    <section id="about">
      <h2 id="about-title">About Me</h2>

      {mapParagraphs(aboutText.summary)}

      {showMore && mapParagraphs(aboutText.complete)}

      <button onClick={handleClick} style={{ color: "#d8415a" }}>
        {buttonText}
      </button>

      <ul id="skills-list">{mapSkills(skills)}</ul>
    </section>
  );
};
