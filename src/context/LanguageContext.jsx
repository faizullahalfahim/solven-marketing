import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); // default English

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        style={{ fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);