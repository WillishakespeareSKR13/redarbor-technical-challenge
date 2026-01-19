import { CONFIG } from "@/src/config"
import { QueryClient } from "@tanstack/react-query"
import axiosClient from "axios"

export const axios = axiosClient.create({
  baseURL: CONFIG.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const query = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      retry: 1,
      retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnReconnect: true,
      refetchInFocus: true,
      refetchOnMount: false,
      networkMode: "offlineFirst",
    } as any,
    mutations: {
      retry: 1,
      networkMode: "offlineFirst",
    },
  },
})
