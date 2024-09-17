import React from "react";

import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";

export const Hello = ({ slogan, lang }) => {
  return (
    <section id="hello">
      <h1 id="hello-title" className="spin-hover">
        <span id="full-name" className="spin-down" data-attr="Andrés Bonilla">
          Andrés Bonilla
        </span>
        <span style={{ display: "none" }}> - </span>
        <span id="profession" className="spin-up" data-attr="Full Stack Dev.">
          Full Stack Dev.
        </span>
      </h1>
      <div id="slogan-box">
        <p id="slogan">{slogan[lang]}</p>

        <a
          id="cv-button"
          className="link-button cancel-link-style tooltip-hover"
          href={`../src/assets/cv-${lang}.pdf`}
          target="_blank"
        >
          <span className="cv-tip tooltip">
            {lang === "eng" ? "Download" : "Descargar"}
          </span>
          <span id="cv-button-text">C.V</span>
          <DownloadIcon id="download-logo" />
        </a>
      </div>
    </section>
  );
};
