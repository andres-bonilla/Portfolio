import "../styles/SocialMenu.css";
import { ReactComponent as GithubLogo } from "../assets/social-logos/github.svg";
import { ReactComponent as LinkedinLogo } from "../assets/social-logos/linkedin.svg";
import { ReactComponent as GmailLogo } from "../assets/social-logos/gmail.svg";

export const SocialMenu = () => {
  return (
    <ul id="social-menu">
      <li>
        <a href="" className="social-link cancel-link-style">
          <GithubLogo className="social-logo" />
        </a>
      </li>

      <li>
        <a href="" className="social-link cancel-link-style">
          <LinkedinLogo className="social-logo" />
        </a>
      </li>
      <li>
        <a href="" className="social-link cancel-link-style">
          <GmailLogo className="social-logo" />
        </a>
      </li>
    </ul>
  );
};
