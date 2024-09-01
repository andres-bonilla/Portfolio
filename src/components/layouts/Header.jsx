import "../../styles/components/header.css";
import { Nav } from "../Nav";

export const Header = ({ headerClass }) => {
  return (
    <header className={headerClass}>
      <div id="header-box">
        <a href="#hello" className="cancel-link-style">
          <div id="logofic"></div>
        </a>
        <Nav />
      </div>
    </header>
  );
};
