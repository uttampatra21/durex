import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userData";
import storeSlice from "./slice/storeDataSlice";
import bagSlice from "./slice/Bagslice";

const corporxStore = configureStore({
  reducer: {
    userData: userSlice.reducer,
    AllStoreData: storeSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default corporxStore;
