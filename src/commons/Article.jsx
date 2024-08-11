import "../styles/Article.css";
import example from "../assets/example-image.jpg";

export const Article = () => {
  return (
    <article>
      <div className="project-info">
        <h2 className="project-title">Titulo</h2>
        <p className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo sed suscipit quasi tenetur veritatis pariatur aut minus eos
          ipsum. Qui cumque perspiciatis aliquid atque! Ipsa expedita illo
          excepturi repudiandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dignissimos explicabo sed suscipit quasi tenetur
          veritatis pariatur aut minus eos ipsum. Qui cumque perspiciatis
          aliquid atque!
        </p>
      </div>
      <img src={example} alt={"ejemplo"} className="project-img" />
    </article>
  );
};
