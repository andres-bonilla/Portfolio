import React from "react";

import { CVButton } from "./CVButton";

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
      <div id="slogan-box">
        <p id="slogan">{slogan}</p>

        <CVButton />
      </div>
    </section>
  );
};
