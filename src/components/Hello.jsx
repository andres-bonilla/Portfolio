import "../styles/Hello.css";

export const Hello = ({ helloClass }) => {
  return (
    <section id="hello" className={helloClass}>
      <div id="hello-text-box">
        <p id="hello-text">
          As a full-stack developer, I feel prepared and excited to take my
          first steps in the tech industry. If you have any advice for my
          projects, I'll be eager to receive your feedback!
        </p>
      </div>
    </section>
  );
};
