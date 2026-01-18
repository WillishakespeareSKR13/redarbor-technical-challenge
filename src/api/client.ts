import { CONFIG } from "@/src/config";
import axios from "axios";

export const client = axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
