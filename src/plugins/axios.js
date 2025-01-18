import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.2.7:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor untuk menambahkan Authorization header
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor untuk menangani error (misalnya token kadaluarsa)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Token tidak valid atau telah kadaluarsa.");
      localStorage.removeItem("access_token");
      localStorage.removeItem("token_type");
      localStorage.removeItem("user");
      // Redirect ke halaman login
      window.location.href = "/login"; // Sesuaikan URL login
    }
    return Promise.reject(error);
  }
);

export default instance;
