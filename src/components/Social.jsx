import "../styles/Social.css";
import { ReactComponent as GithubLogo } from "../assets/github-icon.svg";
import { ReactComponent as LinkedinLogo } from "../assets/linkedin-icon.svg";
import { ReactComponent as GmailLogo } from "../assets/gmail-icon.svg";
import { ReactComponent as MenuLogo } from "../assets/menu-icon.svg";

export const Social = () => {
  return (
    <div id="social-menu">
      <ul id="social-link-list">
        <li>
          <a href="" className="social-link cancel-link-style">
            <GithubLogo />
          </a>
        </li>
        <li>
          <a href="" className="social-link cancel-link-style">
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="" className="social-link cancel-link-style">
            <GmailLogo />
          </a>
        </li>
        <li>
          <a href="" className="social-link cancel-link-style">
            <MenuLogo />
          </a>
        </li>
      </ul>
    </div>
  );
};
