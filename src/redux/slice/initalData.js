import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "mainData",
  initialState: 0,
  reducers: {
    initialData: (state, action) => {
      return store;
    },
  },
});

export const itemsAction = dataSlice.actions;
export default dataSlice;
