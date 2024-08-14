import axios from "axios";
import {getLanguage} from "../locales";

export default axios.create({
    baseURL: `https://back.bellavitawedding.uz/${getLanguage() === null ? "ru" : getLanguage()}/api/`,
    headers: {
        "Content-type": "application/json",
    }
});