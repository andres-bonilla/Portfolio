import "../styles/App.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Hello } from "./Hello";
import { Techs } from "./Techs";
import { Projects } from "./Projects";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const App = () => {
  const [headerClass, setHeaderClass] = useState("without-color");

  const listenScroll = () => {
    if (window.scrollY > 64) setHeaderClass("with-color");
    else setHeaderClass("without-color");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    return () => window.removeEventListener("scroll", listenScroll);
  }, []);
  return (
    <>
      <Header headerClass={headerClass} />
      <main>
        <Hello
          helloClass={
            headerClass === "without-color" ? "expand-hello" : "contract-hello"
          }
        />
        <Techs />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
