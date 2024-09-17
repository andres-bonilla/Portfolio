import React from "react";

import { ArrowButton } from "./ArrowButton";

export const CardFoot = ({ setInfoClass, imgFiles, imgType, lang }) => {
  const mapImgPhone = (list) =>
    list.map((element, i) => {
      return (
        <div key={i} className="img-box">
          <img
            src={`../src/assets/images/${element}`}
            alt={"ejemplo"}
            className="project-img project-img-phone"
          />
        </div>
      );
    });

  return (
    <footer className="project-footer">
      <ArrowButton
        setParentState={setInfoClass}
        buttonClass="info-button"
        tipValues={["Hide", "Show", "Ocultar", "Mostrar"]}
        lang={lang}
      />
      {imgType === "web" ? (
        <img
          src={`../src/assets/images/${imgFiles[0]}`}
          alt={"ejemplo"}
          className="project-img project-img-web"
        />
      ) : (
        <div className="img-phone-container">{mapImgPhone(imgFiles)}</div>
      )}
    </footer>
  );
};
