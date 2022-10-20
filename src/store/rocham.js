import { createSlice } from "@reduxjs/toolkit";

const RoChamSlice = createSlice({
  name: "RoCham",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showAdmin: false,
  },
  reducers: {
    addToAdmin(state, action) {
      const newItem = action.payload;
      // const existingItem = state.itemList.find((item) => item.id === newItem.id);

      state.itemList = newItem;
    },
    deleteItem(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      state.itemList.splice(newItem, 1);
    },
  },
});

export const RoChamActions = RoChamSlice.actions;

export default RoChamSlice;
