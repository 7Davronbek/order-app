import axios from "axios";
import {getLanguage} from "../locales";

export default axios.create({
    baseURL: `https://bellavitawedding.uz/api/${getLanguage() === null ? "ru" : getLanguage()}/main/`,
    headers: {
        "Content-type": "application/json",
    }
});