import "../styles/components/hello.css";
import "../styles/interactions/hello-title.css";
import "../styles/interactions/cv-button.css"; /*
import { ReactComponent as DownloadLogo } from "../assets/icons/download.svg";*/

import React from "react";

export const Hello = ({ slogan }) => {
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

      <p>{slogan}</p>
      {/*
      <button id="cv-button">
        <DownloadLogo id="download-logo" />
        <span>CV</span>
      </button>*/}
    </section>
  );
};
