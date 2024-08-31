import "../styles/Hello.css";
import "../styles/interactions/hello-title.css";
import "../styles/interactions/cv-button.css";
import { ReactComponent as DownloadLogo } from "../assets/icons/download.svg";

export const Hello = ({ slogan }) => {
  return (
    <section id="hello">
      <h1 id="hello-title">
        <span id="full-name" data-attr="Andrés Bonilla">
          Andrés Bonilla
        </span>
        <span style={{ display: "none" }}> - </span>
        <span id="profession" data-attr="Full Stack Dev.">
          Full Stack Dev.
        </span>
      </h1>

      <p>{slogan}</p>

      <button id="cv-button">
        <DownloadLogo id="download-logo" />
        <span>CV</span>
      </button>
    </section>
  );
};
