import React from "react";

import { ArrowButton } from "./ArrowButton";

export const CardFoot = ({ setInfo, img }) => {
  const mapImgPhone = (list) =>
    list.map((file, i) => {
      return (
        <div key={i} className="img-box">
          <img
            src={`../src/assets/images/img-${file}.png`}
            alt={"ejemplo"}
            className="project-img project-img-phone"
          />
        </div>
      );
    });

  return (
    <footer className="project-footer">
      <ArrowButton
        setParentState={setInfo}
        buttonClass="info-button"
        tipValues={{ eng: ["Hide", "Show"], esp: ["Ocultar", "Mostrar"] }}
      />
      {img.type === "web" ? (
        <img
          src={`../src/assets/images/img-${img.files[0]}.png`}
          alt={"ejemplo"}
          className="project-img project-img-web"
        />
      ) : (
        <div className="img-phone-container">{mapImgPhone(img.files)}</div>
      )}
    </footer>
  );
};
