import axios from "axios";

const BASE_URL = " https://api.premier-engineering.uz/api";
export const LANGUAGE = localStorage.getItem("LANGUAGE") || "uz";

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default httpClient;