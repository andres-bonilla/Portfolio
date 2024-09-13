import React, { useState } from "react";

import { ArrowButton } from "./commons/ArrowButton";

export const AboutText = ({ summary, complete }) => {
  const [showMore, setShowMore] = useState(false);

  const setTipText = () => setShowMore(!showMore);

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

      <div className={`text-container ${showMore ? "more-text" : ""}`}>
        {mapParagraphs(complete)}
      </div>

      <ArrowButton
        setParentState={setTipText}
        buttonClass="about-button"
        tipValues={["More", "Less"]}
      />
    </>
  );
};
