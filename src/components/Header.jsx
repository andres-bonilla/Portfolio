import "../styles/Header.css";
import { Nav } from "./Nav";
import { ReactComponent as LightLogo } from "../assets/logo-white.svg";

export const Header = ({ headerClass }) => {
  return (
    <header className={headerClass}>
      <a href="#hello" id="logo-title-link" className="cancel-link-style">
        <LightLogo id="logo" />
        <h1 id="title">Andrés Bonilla</h1>
      </a>
      <Nav />
    </header>
  );
};
