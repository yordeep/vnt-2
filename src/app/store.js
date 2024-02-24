// Store configuration 

import { configureStore } from "@reduxjs/toolkit"



export const store = configureStore({
    reducer:cartReducer
})


import { cartReducer } from "../components/slices/cart/cartSlice"