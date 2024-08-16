import "../styles/Hello.css";

export const Hello = () => {
  return (
    <section id="hello">
      <h2>Presentation</h2>
      <p id="paragraph-1" className="hello-text">
        Hi, I'm <span id="name">Andrés Bonilla.</span>
      </p>
      <p id="paragraph-2" className="hello-text">
        A <span id="profession">full stack dev.</span> prepared and excited to
        have new adventures.
      </p>
      <button id="cv-button">Download CV</button>
    </section>
  );
};
