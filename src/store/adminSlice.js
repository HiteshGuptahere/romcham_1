import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "Admin",
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
      state.itemList.splice(newItem, 1);
    },
  },
});

export const AdminActions = AdminSlice.actions;

export default AdminSlice;
