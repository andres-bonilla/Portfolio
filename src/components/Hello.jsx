import "../styles/Hello.css";
import { ReactComponent as DownloadLogo } from "../assets/icons/download.svg";

export const Hello = () => {
  return (
    <section id="hello">
      <div id="titles">
        <h1 id="full-name">Andrés Bonilla</h1>
        <h2 id="profession">Full Stack Dev.</h2>
      </div>
      <p>I'm prepared and excited to have new adventures.</p>
      <button id="cv-button">
        <DownloadLogo id="download-logo" />
        <span>CV</span>
      </button>
    </section>
  );
};
