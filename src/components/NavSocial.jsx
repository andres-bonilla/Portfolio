import "../styles/components/nav-social.css";
import "../styles/interactions/spin-box.css";
import "../styles/interactions/tooltip.css";
import { socialData } from "../data/paths.json";
import { useSvgImport } from "./utils/useSvgImport";
export const NavSocial = () => {
  const mapSocialLinks = (list) =>
    list.map((element, i) => {
      /*
      const { SvgLogo } = useSvgImport(element.path);*/
      return (
        <li key={i * 5} className="spin-hover">
          <a
            href={element.link}
            className="social-link cancel-link-style spin-down spin-hover tooltip-hover"
            style={{ "--url": `url(${element.path})` }}
          >
            <span className="social-text tooltip">{element.network}</span>
            <span className="spin-down social-logo" />
          </a>
        </li>
      );
    });

  return <ul id="nav-social">{mapSocialLinks(socialData)}</ul>;
};
