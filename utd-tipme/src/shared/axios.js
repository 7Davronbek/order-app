import axios from "axios";

const BASE_URL = " https://api.utd-tipme.uz/api";
export const LANGUAGE = localStorage.getItem("LANGUAGE") || "uz";

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "Accept-Language": LANGUAGE,
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem("LANGUAGE") || "uz"
    config.headers["Accept-Language"] = lang;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
