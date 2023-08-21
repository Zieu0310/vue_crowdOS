import axios from "../utils/http";

export const apis = axios.create({
    timeout: 20000,
    baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});