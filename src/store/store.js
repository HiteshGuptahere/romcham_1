import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./adminSlice";
import AccountHolderSlice from "./accountHolderSlice";
import RoChamSlice from "./RoCham";
import Token from "./token";

const store = configureStore({
  reducer: {
    Admin: AdminSlice.reducer,
    Profile: AccountHolderSlice.reducer,
    RoCham: RoChamSlice.reducer,
    Token: Token.reducer,
  },
});

export default store;
