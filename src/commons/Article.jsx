import "../styles/Article.css";
import example from "../assets/example-image.jpg";

export const Article = () => {
  return (
    <article>
      <div className="information">
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo sed suscipit quasi tenetur veritatis pariatur aut minus eos
          ipsum. Qui cumque perspiciatis aliquid atque! Ipsa expedita illo
          excepturi repudiandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dignissimos explicabo sed suscipit quasi tenetur
          veritatis pariatur aut minus eos ipsum. Qui cumque perspiciatis
          aliquid atque! Ipsa expedita illo excepturi repudiandae. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dignissimos explicabo sed
          suscipit quasi tenetur veritatis pariatur aut minus eos ipsum. Qui
          cumque perspiciatis aliquid atque! Ipsa expedita illo excepturi
          repudiandae.
        </p>
      </div>
      <img src={example} alt={"ejemplo"} className="project-img" />
    </article>
  );
};
