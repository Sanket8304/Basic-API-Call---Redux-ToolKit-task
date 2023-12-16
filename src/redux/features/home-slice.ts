import { createSlice } from "@reduxjs/toolkit";

import { getImageList } from "../apis/home";

interface AuthState {
  isLoading: boolean;
  imageList: Array<any>;
}

export const homeInitialState: AuthState = {
  isLoading: false,
  imageList: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState: homeInitialState,
  reducers: {
    resetHomeStates(state) {
      state.isLoading = false;
      state.imageList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImageList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getImageList.fulfilled, (state, action) => {
      const data = action.payload;

      const updatedList = state.imageList.concat(data);

      state.imageList = updatedList;
    });
    builder.addCase(getImageList.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { resetHomeStates } = homeSlice.actions;
export default homeSlice.reducer;
