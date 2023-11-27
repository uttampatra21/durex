import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/initalData";
import adminSlice from "./slice/admin";
import dailyTaskSlice from "./slice/task";
import reffrailSlice from "./slice/refferal";

const corporxStore = configureStore({
  reducer: {
    mainData: dataSlice.reducer,
    adminPage: adminSlice.reducer,
    taskincome: dailyTaskSlice.reducer,
    reffrailincome: reffrailSlice.reducer,
  },
});

export default corporxStore;
