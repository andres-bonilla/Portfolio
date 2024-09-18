import React from "react";

import { slogan, about } from "../data/about.json";
import { projects } from "../data/projects.json";
import { skills } from "../data/skills.json";

import { LangProvider } from "./utils/LangProvider";

import { Header } from "./Header";
import { Hello } from "./Hello";
import { Projects } from "./Projects";
import { About } from "./About";
import { Work } from "./Work";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <LangProvider>
      <Header />
      <main id="content">
        <Hello slogan={slogan} />
        <Projects projects={projects} skills={skills} />
        <About about={about} skills={skills} />
      </main>
      <Footer />
    </LangProvider>
  );
};
