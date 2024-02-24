// Slice Creation

import { createSlice } from "@reduxjs/toolkit"

export const initialState ={
    items:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
      addItem: (state, action) => {
        const { productid, image, product, price, description, quantity = 1 } =
          action.payload;
      
        const existingItem = state.items.find((item) => item.id === productid);
      
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          const newItem = {
            id: productid,
            image,
            product,
            price,
            description,
            quantity,
          };
          state.items.push(newItem);
        }
      },
        removeItem : (state,action) =>{
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions

export const cartReducer = cartSlice.reducer