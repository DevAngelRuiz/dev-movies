import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "8e5efa0782cfb15fd4fe56e73790c664",
        language: "pt-BR",
        page: 1
    }
});

export default api;