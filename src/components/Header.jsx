import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../assets/logo43.svg";

import { NavSocial } from "./NavSocial";
import { NavSection } from "./NavSection";

export const Header = ({ switchLang }) => {
  const [headerClass, setHeaderClass] = useState("header-colorless");

  const listenScroll = () => {
    if (window.scrollY > 48) setHeaderClass("header-colorful");
    else setHeaderClass("header-colorless");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

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
      <div id="lang-container">
        <input type="checkbox" id="lang-check" onClick={switchLang} />
        <div id="lang-switcher">
          <span className="not-selected">EN</span>
          <span className="not-selected">ES</span>
          <div id="lang-slider">
            <span className="selected">EN</span>
            <span className="selected">ES</span>
          </div>
        </div>
      </div>
    </header>
  );
};
