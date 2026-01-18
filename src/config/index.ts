export const CONFIG = {
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? "https://remotive.com/api",
  ENV: process.env.ENV ?? "development",
}

export const IS_DEV = __DEV__
