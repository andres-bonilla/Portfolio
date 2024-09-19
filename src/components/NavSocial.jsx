import React from "react";

import { social } from "../data/social.json";
import { EmailTip } from "./EmailTip";

import gmail from "./../assets/social-logos/gmail.svg";
import github from "./../assets/social-logos/github.svg";
import linkedin from "./../assets/social-logos/linkedin.svg";

export const NavSocial = () => {
  const mapSocialLinks = (list) => {
    const logoPaths = { github, gmail, linkedin };
    return list.map((item, i) => {
      return (
        <li key={i} className="spin-hover">
          {i === 0 ? (
            <div
              style={{ "--url": `url("${logoPaths[item.file]}")` }}
              className="social-link cancel-link-style spin-hover spin-down tooltip-hover"
            >
              <EmailTip email={item.link} />

              <span className="social-logo spin-down" />
            </div>
          ) : (
            <a
              href={item.link}
              target="_blank"
              style={{ "--url": `url("${logoPaths[item.file]}")` }}
              className="social-link cancel-link-style spin-hover spin-down tooltip-hover"
            >
              <span className="social-tip tooltip">{item.network}</span>

              <span className="social-logo spin-down" />
            </a>
          )}
        </li>
      );
    });
  };

  return <ul id="nav-social">{mapSocialLinks(social)}</ul>;
};
