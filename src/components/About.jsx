import "../styles/About.css";
import { Skills } from "./Skills";
import { useState } from "react";

export const About = ({ aboutText, skills }) => {
  const [showMore, setShowMore] = useState(false);
  const [buttonText, setButtonText] = useState("More");

  const handleClick = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
    setButtonText(buttonText === "More" ? "Less" : "More");
  };
  return (
    <section id="about">
      <h2 id="about-title">About Me</h2>

      {aboutText.summary.map((paragraph, i) => {
        return (
          <p key={i * 50} className="about-text">
            {paragraph}
          </p>
        );
      })}
      {showMore &&
        aboutText.complete.map((paragraph, i) => {
          return (
            <p key={i * 50} className="about-text">
              {paragraph}
            </p>
          );
        })}
      <button onClick={handleClick} style={{ color: "#d8415a" }}>
        {buttonText}
      </button>

      <Skills skills={skills} />
    </section>
  );
};
