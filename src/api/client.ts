import axios from "axios";
import { API_BASE_URL } from "@/src/config";

export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
