import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Data/storeData";

const storeSlice = createSlice({
  name: "AllStoreData",
  initialState: storeData,
  reducers: {
    initialData: (state, action) => {
      return state;
    },
  },
});

export const storeAction = storeSlice.actions;
export default storeSlice;
