import axios from "axios";

const BASE_URL = " http://45.88.79.70:8008/api";

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default httpClient;