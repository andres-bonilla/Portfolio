import React, { useEffect, useState } from "react";
import { ReactComponent as WaitingLogo } from "../assets/tech-logos/axios.svg";

export const SkillCard = ({ techName }) => {
  const [TechLogo, setTechLogo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const loadLogo = async () => {
      try {
        const logo = await import(`../assets/tech-logos/react.svg`);
        setTechLogo(logo.ReactComponent);
      } finally {
        setIsLoading(false);
      }
    };
    loadLogo();
    console.log(TechLogo);
  }, []);

  console.log(TechLogo);
  return (
    <figure className="skill">
      {/*isLoading && !TechLogo ? <WaitingLogo /> : <TechLogo />*/}
      <figcaption className="tech-name">techName</figcaption>
    </figure>
  );
};
