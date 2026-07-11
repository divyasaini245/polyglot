import axios from "axios";

const API = axios.create({
  baseURL: "https://polyglot-v8ur.onrender.com/api",
});

export default API;