import axios from "axios";

export const api = axios.create({
    baseURL: process.env.API_MERCADOPAGO_URL
});

api.interceptors.request.use(
    (request) => {
        const token = process.env.ML_ACCESS_TOKEN
        if (token) {
            request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);