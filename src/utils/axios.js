import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://json-server-1-9lg0.onrender.com",
});
export default axiosInstance;
