import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";

import { storage } from "../utils/functions";
import homeReducer, { homeInitialState } from "./features/home-slice";
import imageDeatilReducer, { imageDetailInitialState } from "./features/imageDeatil-slic";

const authReducerConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["isLoggedIn", "isNever", "accessToken", "userDetails", "isBiometricLoginEnable"],
};

const appReducer = combineReducers({
  home: homeReducer,
  imageDetails: imageDeatilReducer,
});

const rootReducer = (state: any, action: any) => {
  /* Clear persisted data of user on logout action */
  if (action.type === "auth/logout") {
    storage.multiRemove([storage.KEYS.AUTH_STATE]);
    // for all keys defined in your persistConfig(s)
    // storage.removeItem('persist:root');
    // storage.removeItem('persist:otherKey')
    state.home = homeInitialState;
    state.imageDetails = imageDetailInitialState;

    return appReducer(state, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
