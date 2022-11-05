import { createSlice } from "@reduxjs/toolkit";

const Token = createSlice({
  name: "Token",
  initialState: {
    item: {},
    totalQuantity: 0,
    showAdmin: false,
  },
  reducers: {
    addToken(state, action) {
      const newItem = action.payload;

      state.item = newItem;
    },
    deleteItem(state, action) {
      const newItem = action.payload;
      state.itemList.splice(newItem, 1);
    },
  },
});

export const TokenAction = Token.actions;

export default Token;
