import React, { useEffect, useState, useRef } from "react";

const svgFiles = import.meta.glob("./../../assets/tech-logos/*.svg");

export const useSvgImport = (logoFile) => {
  const logoRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (logoFile) {
      setIsLoading(true);

      const importSvgLogo = async () => {
        try {
          logoRef.current = (
            await svgFiles[`../../assets/tech-logos/${logoFile}.svg`]()
          ).ReactComponent;
        } finally {
          setIsLoading(false);
        }
      };

      importSvgLogo();
    }
  }, [logoFile]);

  return { isLoading, SvgLogo: logoRef.current };
};
