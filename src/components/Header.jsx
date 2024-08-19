import "../styles/Header.css";
import { Social } from "./Social";

export const Header = ({ headerClass }) => {
  return (
    <header className={headerClass}>
      <div id="header-box">
        <a href="#hello" id="logo" className="cancel-link-style">
          <div id="logofic"></div>
        </a>
        <Social />
      </div>
    </header>
  );
};
