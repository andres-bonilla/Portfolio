import React, { useEffect, useState, useCallback } from "react";

export const useScrollBin = () => {
  const [bin, setBin] = useState(0);

  const listenScroll = useCallback(() => {
    const HeaderTop = 48;
    const hello = document.getElementById("hello");
    const Projects = document.getElementById("projects");
    const about = document.getElementById("about");
    const infinite = 100000; /*range limit*/

    const sectionRange = [
      HeaderTop,
      hello.offsetTop,
      Projects.offsetTop - 300,
      about.offsetTop - 300,
      infinite,
    ];

    setBin(sectionRange.findIndex((section) => window.scrollY <= section));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

  return { scrollBin: bin };
};
