import React, { useEffect, useState, useRef } from "react";

export const useSvgImport = (logoPath) => {
  const logoRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const importSvgLogo = async () => {
      try {
        logoRef.current = (await import(logoPath)).ReactComponent;
      } finally {
        setIsLoading(false);
      }
    };

    importSvgLogo();
  }, [logoPath]);

  return { isLoading, SvgLogo: logoRef.current };
};
