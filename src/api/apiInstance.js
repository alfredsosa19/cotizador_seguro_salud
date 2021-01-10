import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://freestyle.getsandbox.com/dummy",
});

axiosInstance.defaults.headers.common = {
  "Content-Type": "application/json",
};

export default axiosInstance;
