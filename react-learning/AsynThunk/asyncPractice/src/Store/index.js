import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productSlice"
export const myStore = configureStore({
    reducer: {
        products: productReducer
    }
})