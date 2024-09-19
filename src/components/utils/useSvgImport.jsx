import React, { useEffect, useState, useRef } from "react";

const svgFiles = import.meta.glob("./../../assets/tech-logos/*.svg");

export const useSvgImport = (logoFile) => {
  const logoRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (logoFile) {
      setIsLoading(true);

      const importSvgLogo = async () => {
        /*svgFiles["../../assets/tech-logos/react.svg"]().then((mod) => {
          console.log("../../assets/tech-logos/react.svg", mod.ReactComponent);
        });*/
        try {
          logoRef.current = (
            await svgFiles["../../assets/tech-logos/react.svg"]()
          ).ReactComponent;
        } finally {
          console.log("here", logoRef.current);
          setIsLoading(false);
        }
      };

      importSvgLogo();
    }
  }, [logoFile]);

  return { isLoading, SvgLogo: logoRef.current };
};
