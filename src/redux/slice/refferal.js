import { createSlice } from "@reduxjs/toolkit";

const reffrailSlice = createSlice({
  name: "reffrailincome",
  initialState: 100,
  reducers: {
    dailytask: (state, action) => {
      return state;
    },
  },
});

export const taskAction = reffrailSlice.actions;
export default reffrailSlice;
