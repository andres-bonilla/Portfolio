import "../styles/App.css";
import { Header } from "./Header";
import { Hello } from "./Hello";
import { Techs } from "./Techs";
import { Projects } from "./Projects";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hello />
        <Techs />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
