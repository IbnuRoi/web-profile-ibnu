import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:5000/api";

const API = axios.create({
  baseURL,
});

// Interceptor to attach Authorization header if token exists
API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("admin_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
