import { getAcceptLanguageHeader } from '@/helpers/apiHelper';
import { logout } from '@/redux/slices/authSlice';
import { Store } from '@reduxjs/toolkit';
import axios from 'axios';
// initializing the axios instance with custom configs




let host = (process.env.NEXT_PUBLIC_API_URL);
const api = axios.create({
    withCredentials: true,
    baseURL: host,
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": getAcceptLanguageHeader(),
    },
});
export const setupInterceptor = (store: Store) => {
    api.interceptors.request.use(
        (config) => {

            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    api.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if (error.response && error.response.status === 401) {
                // Example: Logout user if token is invalid or expired
                store.dispatch(logout());
            }
            return Promise.reject(error);
        }
    );
};



export default api;