import AsyncStorage from "@react-native-async-storage/async-storage"
import { StateStorage } from "zustand/middleware"

export const ZustandStorage: StateStorage = {
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, value)
  },
  getItem: async (name) => {
    return await AsyncStorage.getItem(name)
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name)
  },
}
