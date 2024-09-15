import React, { useState, useEffect } from "react";

import { slogan, aboutData } from "../data/text-data.json";
import { projectsData } from "../data/projects.json";
import { skillsData } from "../data/skills.json";

import { Header } from "./Header";
import { Hello } from "./Hello";
import { Projects } from "./Projects";
import { About } from "./About";
import { Work } from "./Work";
import { Footer } from "./Footer";

export const App = () => {
  const [lang, setLang] = useState("eng");
  const switchLang = () => {
    setLang(lang === "eng" ? "esp" : "eng");
  };
  return (
    <>
      <Header switchLang={switchLang} />
      <main id="content">
        <Hello slogan={slogan} lang={lang} />
        <Projects
          data={{ projects: projectsData, skills: skillsData }}
          lang={lang}
        />
        <About aboutText={aboutData["esp"]} skills={skillsData} />
      </main>
      <Footer />
    </>
  );
};
