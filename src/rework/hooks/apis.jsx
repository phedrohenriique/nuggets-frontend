import axios from "axios";

const server = "http://localhost:8800"

export const request = axios.create({
    baseURL: server,
    timeout: 1000
})

//request.defaults.method="no-cors"
//request.defaults.headers.post["Content-Type"] = "application/json"
//request.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
