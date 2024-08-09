import "../styles/Header.css";
import { Nav } from "./Nav";

export const Header = ({ headerClass }) => {
  return (
    <header className={headerClass}>
      <Nav
        color={headerClass === "head-with-color" ? "#fffaf2" : "#00122e"}
        navClass={
          headerClass === "head-with-color" ? "wrap-nav" : "no-wrap-nav"
        }
      />
    </header>
  );
};
