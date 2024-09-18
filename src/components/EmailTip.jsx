import React, { useState } from "react";

import { useLang } from "./utils/LangProvider";

export const EmailTip = ({ email }) => {
  const { lang } = useLang();
  let timeToRemoveTickId;

  const [tick, setTick] = useState("");

  const copyEmail = () => {
    clearTimeout(timeToRemoveTickId);

    navigator.clipboard.writeText(email);
    setTick(" ✓");

    timeToRemoveTickId = setTimeout(() => setTick(""), 2500);
  };

  const sendEmail = () => window.open(`mailto:${email}`);

  return (
    <div className="email-tip social-tip tooltip">
      <button onClick={copyEmail} className="email-button link-button">
        {(lang === "eng" ? "Copy" : "Copiar") + tick}
      </button>
      <button onClick={sendEmail} className="email-button link-button">
        {lang === "eng" ? "Send" : "Enviar"}
      </button>
    </div>
  );
};
