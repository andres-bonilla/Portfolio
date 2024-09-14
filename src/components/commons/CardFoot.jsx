import React from "react";

import { ArrowButton } from "./ArrowButton";

export const CardFoot = ({ setInfoClass, imgArr, imgType }) => {
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
        tipValues={["Show", "Hide"]}
      />
      {imgType === "web" && (
        <img
          src={`../src/assets/images/${imgArr[0]}`}
          alt={"ejemplo"}
          className="project-img project-img-web"
        />
      )}
      {imgType === "phone" && (
        <div className="img-phone-container">{mapImgPhone(imgArr)}</div>
      )}
    </footer>
  );
};
