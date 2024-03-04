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
        const { _id, productImage, name, price, description, quantity = 1} =
          action.payload
      
        const existingItem = state.items.find((item) => item.id === _id)
      
        if (existingItem) {
          existingItem.quantity += quantity
        } 
        else {
          const newItem = {
            id: _id,
            image : productImage,
            name : name,
            price,
            description,
            quantity,
          };
          state.items.push(newItem);
        }
      },

      removeItem : (state,action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
      },

      addQuantity : (state,action) => {
       state.items.map((item) => item.id === action.payload ? item.quantity++ : item)
      },
      removeQuantity : (state,action) => {
        state.items.map((item) => (
          item.id === action.payload 
          ? item.quantity > 1 ? item.quantity-- : state.items = state.items.filter((item) => item.id !== action.payload)
          : item
        ))
      }
    }
})

export const {addItem,removeItem,addQuantity,removeQuantity} = cartSlice.actions

export const cartReducer = cartSlice.reducer