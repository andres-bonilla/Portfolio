import React, { useState, createContext, useContext } from "react";

const langContext = createContext();

export const useLang = () => {
  return useContext(langContext);
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("eng");

  const toggleLang = () => {
    setLang(lang === "eng" ? "esp" : "eng");
  };
  return (
    <langContext.Provider value={{ lang, toggleLang }}>
      {children}
    </langContext.Provider>
  );
};
