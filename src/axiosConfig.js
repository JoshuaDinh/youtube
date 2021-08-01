import axios from "axios";
const instance = axios.create({
  baseURL: "https://localhost:5000",
});

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export default instance;
