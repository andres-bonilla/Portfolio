import "../styles/Nav.css";
import { ReactComponent as LightLogo } from "../assets/logo-white.svg";
import { ReactComponent as DarkLogo } from "../assets/logo-dark.svg";

export const Nav = ({ color, navClass }) => {
  return (
    <nav className={navClass}>
      <a href="#hello" id="logo-link-box" className="cancel-link-style">
        {navClass === "wrap-nav" ? (
          <LightLogo id="logo" />
        ) : (
          <DarkLogo id="logo" />
        )}
        <div id="title-box">
          <h1 id="title" style={{ color: color }}>
            ANDRÉS BONILLA
          </h1>
        </div>
      </a>
      <ul id="nav-link-list">
        <a href="#projects" className="cancel-link-style">
          <li className="nav-link">Projects</li>
        </a>
        <a href="#about" className="cancel-link-style">
          <li className="nav-link">About</li>
        </a>
        <a href="#contact" className="cancel-link-style">
          <li className="nav-link">Contact</li>
        </a>
      </ul>
    </nav>
  );
};
