import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030"
});

// api.interceptors.request.use(async config => {
//   const token = localStorage.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;