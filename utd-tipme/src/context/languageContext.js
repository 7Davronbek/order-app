import React, { createContext, useState, useContext } from "react";
import { LANGUAGE } from "../shared/axios";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGE);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
