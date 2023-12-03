import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userData";
import storeSlice from "./slice/storeDataSlice";

const corporxStore = configureStore({
  reducer: {
    userData: userSlice.reducer,
    AllStoreData: storeSlice.reducer,
  },
});

export default corporxStore;
