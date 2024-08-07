import { getAcceptLanguageHeader } from '@/helpers/apiHelper';
import axios from 'axios';
// initializing the axios instance with custom configs


let host = (process.env.NEXT_PUBLIC_API_URL);
console.log("on Load host:", host)
const api = axios.create({
    withCredentials: true,
    baseURL: host,
    headers: {
        "Accept-Language": getAcceptLanguageHeader(),
        "Content-Type": "application/json",
    },
});


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Retrieve the auth token from the local storage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for API responses
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        // Attempt to refresh token if the request is unauthorized (401)
        return Promise.reject(error);
    }
);

export default api;