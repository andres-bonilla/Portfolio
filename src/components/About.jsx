import "../styles/About.css";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <section id="about">
      <article id="me">
        <h2 className="about-title">
          <span id="about-title-right"></span>
          <span id="about-title-center">
            <span id="about-title-center-right">About</span>
            <span id="about-title-center-left">Me</span>
          </span>
          <span id="about-title-left"></span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          perspiciatis, ducimus consequatur, temporibus non eaque nostrum
          expedita quasi error quam totam dignissimos nesciunt laboriosam dicta
          quod inventore suscipit, nihil voluptates. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Tenetur iure, aut sed neque odit
          aspernatur minima aperiam cumque amet provident hic, quaerat rem non.
          Voluptas hic facilis fugit dignissimos doloremque.
        </p>
        <Skills />
      </article>
    </section>
  );
};
