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
      const url = { "--url": `url("${logoPaths[item.file]}")` };
      const classes =
        "social-link cancel-link-style spin-hover spin-down tooltip-hover";

      return (
        <li key={i} className="spin-hover">
          {i === 0 ? (
            <div className={classes}>
              <EmailTip email={item.link} />

              <span className="social-logo spin-down" style={url} />
            </div>
          ) : (
            <a href={item.link} target="_blank" className={classes}>
              <span className="social-tip tooltip">{item.network}</span>

              <span className="social-logo spin-down" style={url} />
            </a>
          )}
        </li>
      );
    });
  };

  return <ul id="nav-social">{mapSocialLinks(social)}</ul>;
};
