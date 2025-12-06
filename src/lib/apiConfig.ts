import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// Base configuration
const BASE_URL = "https://smartrent360-backend.onrender.com/api/v1/";
// const BASE_URL = "http://localhost:4000/api/v1/";
const ACCESS_TOKEN_KEY = "accessToken";

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach authorization token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Get token from sessionStorage
    const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle 401 unauthorized - token expired or invalid
    if (error.response?.status === 401) {
      // Clear invalid token
      sessionStorage.removeItem(ACCESS_TOKEN_KEY);

      // Redirect to login page or handle authentication
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
