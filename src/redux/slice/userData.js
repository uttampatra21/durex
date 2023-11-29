import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../Data/userData";

const userSlice = createSlice({
  name: "userData",
  initialState: user,
  reducers: {
    initialData: (state, action) => {
      return state;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
