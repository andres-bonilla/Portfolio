import "../styles/About.css";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <section id="about">
      <h2 id="about-title">About Me</h2>

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
