import React from "react";

import { social } from "../data/social.json";
import { EmailTip } from "./EmailTip";

export const NavSocial = () => {
  const mapSocialLinks = (list) =>
    list.map((item, i) => {
      return (
        <li key={i} className="spin-hover">
          {i === 0 ? (
            <div
              style={{ "--url": `url("./social-logos/s-${item.file}")` }}
              className="social-link cancel-link-style spin-hover spin-down tooltip-hover"
            >
              <EmailTip email={item.link} />

              <span className="social-logo spin-down" />
            </div>
          ) : (
            <a
              href={item.link}
              target="_blank"
              style={{ "--url": `url("./social-logos/s-${item.file}")` }}
              className="social-link cancel-link-style spin-hover spin-down tooltip-hover"
            >
              <span className="social-tip tooltip">{item.network}</span>

              <span className="social-logo spin-down" />
            </a>
          )}
        </li>
      );
    });

  return <ul id="nav-social">{mapSocialLinks(social)}</ul>;
};
