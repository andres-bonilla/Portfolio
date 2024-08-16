import "../styles/About.css";
import { Techs } from "./Techs";

export const About = () => {
  return (
    <section id="about">
      <div id="about-container">
        <article id="me">
          <h2 className="about-title">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            perspiciatis, ducimus consequatur, temporibus non eaque nostrum
            expedita quasi error quam totam dignissimos nesciunt laboriosam
            dicta quod inventore suscipit, nihil voluptates. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Tenetur iure, aut sed neque
            odit aspernatur minima aperiam cumque amet provident hic, quaerat
            rem non. Voluptas hic facilis fugit dignissimos doloremque.
          </p>
        </article>
        <Techs />
      </div>
    </section>
  );
};
