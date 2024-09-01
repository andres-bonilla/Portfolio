import "../styles/main.css";

import { slogan, aboutData } from "../data/text-data.json";
import { projectsData } from "../data/projects.json";
import { skillsData } from "../data/skills.json";

import React, { useState, useEffect } from "react";

import { Header } from "./layouts/Header";
import { Hello } from "./Hello";
import { Projects } from "./Projects";
import { About } from "./About";
import { Work } from "./Work";
import { Footer } from "./layouts/Footer";

export const App = () => {
  const [headerClass, setHeaderClass] = useState("header-colorless");

  const listenScroll = () => {
    if (window.scrollY > 48) setHeaderClass("header-colorful");
    else setHeaderClass("header-colorless");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

  return (
    <>
      <Header headerClass={headerClass} />
      <main>
        <Hello slogan={slogan["eng"]} />
        <Projects projects={projectsData} lang={"esp"} />
        <About aboutText={aboutData["esp"]} skills={skillsData} />
      </main>
      <Footer />
    </>
  );
};
