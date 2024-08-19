import "../styles/About.css";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <section id="about">
      <h2 id="about-title">
        <span className="about-title-space"></span>
        <span id="about-title-text">
          <span id="about-title-text-left">About</span>
          <span id="about-title-text-right">Me</span>
        </span>
        <span className="about-title-space"></span>
      </h2>
      <p id="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        perspiciatis, ducimus consequatur, temporibus non eaque nostrum expedita
        quasi error quam totam dignissimos nesciunt laboriosam dicta quod
        inventore suscipit, nihil voluptates. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Tenetur iure, aut sed neque odit
        aspernatur minima aperiam cumque amet provident hic, quaerat rem non.
        Voluptas hic facilis fugit dignissimos doloremque.
      </p>
      <Skills />
    </section>
  );
};
