// Store configuration 

import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "../components/slices/cart/cartSlice"


export const store = configureStore({
    reducer:cartReducer
})