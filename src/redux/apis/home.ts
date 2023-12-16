import { createAsyncThunk } from "@reduxjs/toolkit";

import Webservice from "./webService";
import { HOME_APIS } from "../../constants/apiConstants";

export const getImageList: any = createAsyncThunk<any>("getImageList", async (data: any, { rejectWithValue }) => {
  try {
    const response = await Webservice.GET(
      HOME_APIS.GET_IMAGE_LIST + `?_start=${data._start}&_limit=${data._limit}`,
      {}
    );

    return response.data;
  } catch (error: any) {
    console.log(`${HOME_APIS.GET_IMAGE_LIST}`, error);
    return rejectWithValue(error.response.data);
  }
});
