import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./adminSlice";
import AccountHolderSlice from "./accountHolderSlice";
import RoChamSlice from "./RoCham";

const store = configureStore({
  reducer: {
    Admin: AdminSlice.reducer,
    Profile: AccountHolderSlice.reducer,
    RoCham: RoChamSlice.reducer,
  },
});

export default store;
