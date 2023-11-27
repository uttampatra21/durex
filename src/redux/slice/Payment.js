import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "paymentUs",
  initialState: 12,
  reducers: {
    dailytask: (state, action) => {
      return state;
    },
  },
});

export const taskAction = paymentSlice.actions;
export default paymentSlice;
