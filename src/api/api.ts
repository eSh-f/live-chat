import axios from "axios";
// Settings
const API_URL = "http://localhost:4000/api"; // Сохранение в переменную

export const api = axios.create({
  baseURL: API_URL,
});
