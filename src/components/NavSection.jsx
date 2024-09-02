import "../styles/components/nav-section.css";
import "../styles/interactions/nav-section-links.css";
import "../styles/interactions/spin-box.css";
import "../styles/interactions/tooltip.css";

export const NavSection = () => {
  const mapLinks = (list) =>
    list.map((element, i) => {
      return (
        <li key={i * 5}>
          <a
            href={`#${element}`}
            className="nav-link cancel-link-style tooltip-hover"
          >
            <span className="nav-text tooltip">{element}</span>
            <span className="nav-square-box spin-hover">
              <span className="nav-square spin-down" />
            </span>
          </a>
        </li>
      );
    });

  return (
    <ul id="nav-section">
      {mapLinks(["hello", "projects", "about", "works"])}
    </ul>
  );
};
