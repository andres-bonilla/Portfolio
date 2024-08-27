import "../styles/Header.css";
import { NavMenu } from "./NavMenu";
import { SocialMenu } from "./SocialMenu";

export const Header = ({ headerClass }) => {
  return (
    <header className={headerClass}>
      <div id="header-box">
        <a href="#hello" className="cancel-link-style">
          <div id="logofic"></div>
        </a>
        <nav>
          <SocialMenu />
        </nav>
      </div>
    </header>
  );
};
