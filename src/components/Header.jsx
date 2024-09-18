import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { NavSocial } from "./NavSocial";
import { NavSection } from "./NavSection";
import { useScrollBin } from "./utils/useScrollBin";
import { useLang } from "./utils/LangProvider";

export const Header = () => {
  const { toggleLang } = useLang();
  const { scrollBin } = useScrollBin();

  const [headerClass, setHeaderClass] = useState("header-colorless");

  useEffect(() => {
    setHeaderClass(scrollBin > 0 ? "header-colorful" : "header-colorless");
  }, [scrollBin]);

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
        <input type="checkbox" id="lang-check" onClick={toggleLang} />
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
