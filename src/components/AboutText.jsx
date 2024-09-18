import React, { useState } from "react";

import { ArrowButton } from "./commons/ArrowButton";

export const AboutText = ({ summary, complete }) => {
  const [show, setShow] = useState(false);

  const setMoreText = () => setShow(!show);

  const mapParagraphs = (list) =>
    list.map((text, i) => {
      return (
        <p key={i} className="about-text">
          {text}
        </p>
      );
    });

  return (
    <>
      {mapParagraphs(summary)}

      <div className={`text-container ${show ? "more-text" : ""}`}>
        {mapParagraphs(complete)}
      </div>

      <ArrowButton
        setParentState={setMoreText}
        buttonClass="about-button"
        tipValues={{ eng: ["More", "Less"], esp: ["Más", "Menos"] }}
      />
    </>
  );
};
