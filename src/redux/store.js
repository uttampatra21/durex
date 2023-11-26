import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "task",

  initialState: {},

  reducers: {
    smallReducerMthd: (state, action) => {},
  },
});

const store = configureStore({
  reducer: { task: dataSlice.reducer },
});

export const action = dataSlice.actions;
export default store;
