import "../styles/Social.css";
import { ReactComponent as GithubLogo } from "../assets/social-logos/github.svg";
import { ReactComponent as LinkedinLogo } from "../assets/social-logos/linkedin.svg";
import { ReactComponent as GmailLogo } from "../assets/social-logos/gmail.svg";
import { ReactComponent as MenuLogo } from "../assets/icons/menu.svg";

export const Social = () => {
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
      {/*<li>
          <a href="" className="social-link cancel-link-style">
            <MenuLogo />
          </a>
        </li>*/}
    </ul>
  );
};
