import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_SECRET_URL,
});
export const fetchData = () =>
    API.get();
