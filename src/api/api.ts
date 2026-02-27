import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

let currentToken: string | null = localStorage.getItem("access_token");

export const setAuthToken = (token: string | null) => {
  currentToken = token;
};

const api = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (currentToken) {
    config.headers = config.headers || {};
    (config.headers as any).Authorization = `Bearer ${currentToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      currentToken = null;
      localStorage.removeItem("access_token");
    }
    return Promise.reject(error);
  }
);

export default api;