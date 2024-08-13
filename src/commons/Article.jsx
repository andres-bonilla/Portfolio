import "../styles/Article.css";
import example from "../assets/example-image.jpg";
import { useState } from "react";

export const Article = () => {
  const [hideExpose, setHideExpose] = useState("info-hide");
  const changeClass = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    setHideExpose(hideExpose === "info-hide" ? "info-expose" : "info-hide");
  };

  return (
    <article>
      <div className={`project-info ${hideExpose}`}>
        <h3 className="project-title">Titulo</h3>
        <p className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo sed suscipit quasi tenetur veritatis pariatur aut minus eos
          ipsum. Qui cumque perspiciatis aliquid atque! Ipsa expedita illo
          excepturi repudiandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
      <img src={example} alt={"ejemplo"} className="project-img" />
      <div className="project-actions">
        <div className="redondo"></div>
        <button onClick={changeClass} className="redondo more-info"></button>
        <div className="redondo"></div>
      </div>
    </article>
  );
};
