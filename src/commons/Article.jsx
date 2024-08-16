import "../styles/Article.css";
import example from "../assets/example-image.jpg";
import { ReactComponent as LinkLogo } from "../assets/icon-link.svg";
import { ReactComponent as CodeLogo } from "../assets/icon-code.svg";
import { ReactComponent as InfoLogo } from "../assets/icon-plus.svg";
import { useState } from "react";

export const Article = () => {
  const [hideExpose, setHideExpose] = useState("info-hide");

  const handleClic = (e) => {
    e.preventDefault();
    setHideExpose(hideExpose === "info-hide" ? "info-expose" : "info-hide");
  };

  return (
    <article className={"project"}>
      <div className={`project-info ${hideExpose}`} onClick={handleClic}>
        <div id="action-menu">
          <ul id="action-link-list">
            <li>
              <a href="" className="action-link cancel-link-style">
                <LinkLogo />
              </a>
            </li>
            <li>
              <a href="" className="action-link cancel-link-style">
                <CodeLogo />
              </a>
            </li>
            <li>
              <a href="" className="action-link cancel-link-style">
                <InfoLogo />
              </a>
            </li>
          </ul>
        </div>
        <h3 className="project-title">Titulo</h3>
        <p className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo sed suscipit quasi tenetur veritatis pariatur aut minus eos
          ipsum.
        </p>
      </div>

      <div className="project-img-container">
        <img
          src={example}
          alt={"ejemplo"}
          className="project-img"
          onClick={handleClic}
        />
      </div>
    </article>
  );
};
