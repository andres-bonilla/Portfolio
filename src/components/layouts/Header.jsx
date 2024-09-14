import React from "react";

import { ReactComponent as Logo } from "../../assets/logo5.svg";

import { NavSocial } from "../NavSocial";
import { NavSection } from "../NavSection";

export const Header = ({ headerClass }) => {
  return (
    <header id="head" className={headerClass}>
      <div id="header-box">
        <a id="link-main-logo" href="/" className="cancel-link-style">
          <Logo id="main-logo" />
        </a>

        <nav>
          <NavSocial />
          <NavSection />
        </nav>
      </div>
    </header>
  );
};
