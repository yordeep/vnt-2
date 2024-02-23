// Slice Creation

import { createSlice } from "@reduxjs/toolkit"

export const initialState ={
    items:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem : (state,action) =>{
            const item = {
                id:action.payload.productid,
                image:action.payload.image,
                product:action.payload.product,
                price:action.payload.price,
                description:action.payload.description

            }
            state.items.push(item)
        },
        removeItem : (state,action) =>{
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions

export const cartReducer = cartSlice.reducer