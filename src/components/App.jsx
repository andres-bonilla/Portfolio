import "../styles/App.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Hello } from "./Hello";
import { Projects } from "./Projects";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const App = () => {
  const [headerClass, setHeaderClass] = useState("head-without-color");

  const listenScroll = () => {
    if (window.scrollY > 1) setHeaderClass("head-with-color");
    else setHeaderClass("head-without-color");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

  return (
    <>
      {/*<div id="gradient-border"></div>
      <Header headerClass={headerClass} />*/}
      <main className="page-background">
        <Hello />
        <Projects />
        <About />{" "}
        {/*
        <Work />
        <Contact />*/}
      </main>
      {/*<Footer />*/}
    </>
  );
};
