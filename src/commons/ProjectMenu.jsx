import "../styles/ProjectMenu.css";
import { ReactComponent as LinkLogo } from "../assets/icon-link.svg";
import { ReactComponent as CodeLogo } from "../assets/icon-code.svg";
import { ReactComponent as InfoLogo } from "../assets/icon-plus.svg";

export const ProjectMenu = () => {
  return (
    <div className="project-menu-box">
      <ul className="project-menu-list">
        <li>
          <a href="" className="project-menu-item cancel-link-style">
            <LinkLogo />
          </a>
        </li>
        <li>
          <a href="" className="project-menu-item cancel-link-style">
            <CodeLogo />
          </a>
        </li>
        <li>
          <a href="" className="project-menu-item more-info cancel-link-style">
            <InfoLogo />
          </a>
        </li>
      </ul>
    </div>
  );
};
