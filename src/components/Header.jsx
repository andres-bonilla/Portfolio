import "../styles/Header.css";
import { ReactComponent as LightLogo } from "../assets/logo-white.svg";
import { ReactComponent as DarkLogo } from "../assets/logo-dark.svg";
import { Nav } from "./Nav";

export const Header = ({ headerClass }) => {
  return (
    <header className={headerClass}>
      <Nav
        Logo={headerClass === "without-color" ? DarkLogo : LightLogo}
        color={headerClass === "without-color" ? "#00122e" : "#fffaf2"}
        className={headerClass === "without-color" ? "no-wrap" : "wrap"}
      />
    </header>
  );
};
