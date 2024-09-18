import React, { useEffect, useState, useRef } from "react";

export const useSvgImport = (logoFile) => {
  const logoRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const importSvgLogo = async () => {
      try {
        logoRef.current = (
          await import(`/tech-logos/t-${logoFile}.svg`)
        ).ReactComponent;
      } finally {
        setIsLoading(false);
      }
    };

    importSvgLogo();
  }, [logoFile]);

  return { isLoading, SvgLogo: logoRef.current };
};
