import React, { useEffect, useState, useRef } from "react";

export const useSvgImport = (logoName) => {
  const logoRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const importSvgLogo = async () => {
      try {
        logoRef.current = (
          await import(`../assets/tech-logos/${logoName}.svg`)
        ).ReactComponent;
      } finally {
        setIsLoading(false);
      }
    };

    importSvgLogo();
  }, [logoName]);

  return { isLoading, SvgLogo: logoRef.current };
};
