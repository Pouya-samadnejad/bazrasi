import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          window.location.href = "/";
          break;
        case 403:
          window.location.href = "errors/403";
          break;
        case 500:
          window.location.href = "errors/500";
          break;
        default:
          console.error("خطای ناشناخته:", error.response);
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default api;
