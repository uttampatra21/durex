import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/initalData";
import adminSlice from "./slice/admin";

const corporxStore = configureStore({
  reducer: {
    mainData: dataSlice.reducer,
    adminPage: adminSlice.reducer,
  },
});

export default corporxStore;
