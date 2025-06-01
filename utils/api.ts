import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_APP_API || "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 400:
          console.warn("درخواست نامعتبر (400).");
          break;
        case 401:
          console.warn("احراز هویت ناموفق (401).");
          break;
        case 403:
          console.warn("دسترسی غیرمجاز (403).");
          break;
        case 404:
          console.warn("آیتم پیدا نشد (404).");
          break;
        case 500:
          console.error("خطای داخلی سرور (500).");
          break;
        default:
          console.error(`خطا با کد وضعیت: ${status}`);
          break;
      }
    } else if (error.request) {
      console.error("درخواست ارسال شد ولی پاسخی از سرور دریافت نشد.");
    } else {
      console.error("خطا در تنظیم درخواست:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
