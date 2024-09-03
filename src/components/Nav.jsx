import React from "react";
import { NavSection } from "./NavSection";
import { NavSocial } from "./NavSocial";

export const Nav = () => {
  return (
    <nav>
      <NavSocial />
      <NavSection />
    </nav>
  );
};
