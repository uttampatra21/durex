import { createSlice } from "@reduxjs/toolkit";

const dailyTaskSlice = createSlice({
  name: "taskincome",
  initialState: 1.,
  reducers: {
    dailytask: (state, action) => {
      return state;
    },
  },
});

export const taskAction = dailyTaskSlice.actions;
export default dailyTaskSlice;
