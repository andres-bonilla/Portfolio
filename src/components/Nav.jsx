import "../styles/Nav.css";

export const Nav = () => {
  return (
    <nav>
      <ul id="nav-link-list">
        <li className="nav-link">
          <a href="#projects" className="cancel-link-style">
            Projects
          </a>
        </li>
        <li className="nav-link">
          <a href="#about" className="cancel-link-style">
            About
          </a>
        </li>
        <li className="nav-link">
          <a href="#contact" className="cancel-link-style">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
