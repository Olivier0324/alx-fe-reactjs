// src/services/github.js
import axios from "axios";
const BASE_URL = "https://api.github.com";
const github = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
});

export default github;
