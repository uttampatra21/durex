import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userData";

const corporxStore = configureStore({
  reducer: {
    userData: userSlice.reducer,

  },
});

export default corporxStore;
