import { LANGUAGE } from "../tools/constant";
import { en } from "./en";
import { ru } from "./ru";
import { uz } from "./uz";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "en"
    ? en[word]
    : getLanguage() === "ru"
    ? ru[word]
    : uz[word];
};
