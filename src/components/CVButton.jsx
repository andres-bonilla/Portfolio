import React from "react";

import { ReactComponent as DownloadLogo } from "../assets/icons/download.svg";

export const CVButton = () => {
  return (
    <button id="cv-button" className="tooltip-hover">
      <span className="cv-tip tooltip">Download</span>
      <DownloadLogo id="download-logo" />
      <span id="cv-button-text">C.V</span>
    </button>
  );
};
