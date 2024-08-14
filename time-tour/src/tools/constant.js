export const LANGUAGE = "app-zamaantravel-language";
export const API_PATH = `https://backend.zamaan.uz/${
  localStorage.getItem(LANGUAGE) ? localStorage.getItem(LANGUAGE) : "ru"
}/`;