import "../styles/Nav.css";

export const Nav = ({ Logo, color, className }) => {
  return (
    <nav className={className}>
      <a href="#hello" className="cancel-link-style link-size">
        <Logo id="logo" />
        <div id="title-box">
          <h1 id="title" style={{ color: color }}>
            ANDRÉS BONILLA
          </h1>
        </div>
      </a>
      <ul id="link-list" className="cancel-list-style">
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
