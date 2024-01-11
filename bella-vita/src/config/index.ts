import axios from "axios";

export default axios.create({
    baseURL: "https://bellavitawedding.uz/api/main",
    headers: {
        "Content-type": "application/json",
    }
});