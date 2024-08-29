import "../styles/NavMenu.css";

export const NavMenu = () => {
  return (
    <ul id="nav-menu">
      <li>
        <a href="#hello" className="nav-link cancel-link-style">
          Hello
        </a>
      </li>
      <li>
        <a href="#projects" className="nav-link cancel-link-style">
          Projects
        </a>
      </li>
      <li>
        <a href="#about" className="nav-link cancel-link-style">
          About
        </a>
      </li>
      <li>
        <a href="#works" className="nav-link cancel-link-style">
          Works
        </a>
      </li>
    </ul>
  );
};
