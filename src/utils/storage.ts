import AsyncStorage from "@react-native-async-storage/async-storage";

export default {
  KEYS: {
    AUTH_STATE: "persist:auth",
  },
  setItem: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  },
  getItem: async (key: string) => {
    try {
      await AsyncStorage.getItem(key);
    } catch (e) {
      // error reading value
    }
  },
  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // error reading value
    }
  },
  multiRemove: async (keys: string[]) => {
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      // remove error
    }
  },
};
