import "../styles/App.css";
import { Header } from "./Header";
import { Hello } from "./Hello";
import { Projects } from "./Projects";
import { About } from "./About";
import { Work } from "./Work";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import textData from "../textData.json";

export const App = () => {
  const [headerClass, setHeaderClass] = useState("header-colorless");

  const listenScroll = () => {
    if (window.scrollY > 0) setHeaderClass("header-colorful");
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
        <Hello slogan={textData.hello["eng"]} />
        <Projects projects={textData.projects} lang={"esp"} />
        <About aboutText={textData.about["esp"]} skills={textData.skills} />
      </main>
      <Footer />
    </>
  );
};
