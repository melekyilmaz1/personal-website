import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { pageData } from "../data/data";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("site_lang", "tr");
  const [content, setContent] = useState(pageData[lang] || pageData.tr);
  const [loading, setLoading] = useState(false);

  const toggleLang = () => {
    const nextLang = lang === "tr" ? "en" : "tr";
    setLang(nextLang);
    setContent(pageData[nextLang]);

    setLoading(true);
    axios
      .post("https://reqres.in/api/workintech", { language: nextLang })
      .then(() => {
        toast.success(
          nextLang === "tr"
            ? "Dil Türkçe olarak güncellendi"
            : "Language switched to English"
        );
      })
      .catch((err) => {
        console.error("API Error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, content, loading }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);