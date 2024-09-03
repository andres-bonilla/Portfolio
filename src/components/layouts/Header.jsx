import "../../styles/components/header.css";

import React from "react";
import { Nav } from "../Nav";

export const Header = ({ headerClass }) => {
  return (
    <header className={headerClass}>
      <div id="header-box">
        <a href="#" className="cancel-link-style">
          <div id="main-logo"></div>
        </a>

        <Nav />
      </div>
    </header>
  );
};
