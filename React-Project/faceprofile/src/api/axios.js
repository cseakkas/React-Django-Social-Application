import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Attach JWT token smoothly
axiosInstance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("access");

    if (token) {
      // সব ধরণের কোটেশন এবং ব্যাকস্ল্যাশ এস্কেপ ক্যারেক্টার পরিষ্কার করার নিখুঁত উপায়
      token = token.trim().replace(/^["']|["']$/g, "").replace(/\\"/g, '"');
      
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
      
      // কনসোলে চেক করার জন্য (লগইন সাকসেস হলে ব্রাউজার কনসোলে এই টোকেনটি দেখতে পাবেন)
      console.log("Axios sending header:", config.headers.Authorization);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;