import { LANGUANGE } from "../tools/constant";
import { kr } from "./kr";
import { uz } from "./uz";

export const getLanguage = () => {
//   return localStorage.getItem(LANGUANGE);
  return 'kr';
};

export const getText = (word) => {
  return getLanguage() === "kr"
    ? kr[word]
    : getLanguage() === "uz"
    ? uz[word]
    : "";
};
