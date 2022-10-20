import { createSlice } from "@reduxjs/toolkit";

const AccountHolderSlice = createSlice({
    name: 'Profile',
    initialState: {
        itemList: [],
        item: {},
        totalQuantity: 0,
        showAdmin: false,
    },
    reducers: {
        addProfile(state, action) {
            const newItem = action.payload;
            // const existingItem = state.itemList.find((item) => item.id === newItem.id);

            state.itemList = newItem;
        },
        addItem(state, action) {
            const newItem = action.payload;
            // const existingItem = state.itemList.find((item) => item.id === newItem.id);

            state.item = newItem;
        },
        deleteItem(state, action) {
            const newItem = action.payload;
            console.log(newItem)
            state.itemList.splice(newItem, 1)
        }
    }
})

export const AccountHolderActions = AccountHolderSlice.actions;

export default AccountHolderSlice;