import axios from "axios";

export const request = axios.create({
    baseURL: "http://localhost:8800",
    timeout: 1000
})