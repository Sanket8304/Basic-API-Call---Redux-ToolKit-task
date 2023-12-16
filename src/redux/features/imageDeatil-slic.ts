import { createSlice } from "@reduxjs/toolkit";

import { getImageList } from "../apis/home";

interface Objectany {
  [key: string]: number | string;
}

interface AuthState {
  imageDetail: Objectany;
}

export const imageDetailInitialState: AuthState = {
  imageDetail: {},
};

const imageDeatilSlice = createSlice({
  name: "imageDeatil",
  initialState: imageDetailInitialState,
  reducers: {
    setImageDetail(state, action) {
      state.imageDetail = action.payload;
    },
    reSetImageDetail(state) {
      state.imageDetail = {};
    },
  },
  extraReducers: (builder) => {},
});

export const { setImageDetail, reSetImageDetail } = imageDeatilSlice.actions;
export default imageDeatilSlice.reducer;
