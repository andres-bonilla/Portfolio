import "../styles/Nav.css";

export const Nav = () => {
  return (
    <nav>
      <ul id="nav-link-list">
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
          <a href="#contact" className="nav-link cancel-link-style">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
