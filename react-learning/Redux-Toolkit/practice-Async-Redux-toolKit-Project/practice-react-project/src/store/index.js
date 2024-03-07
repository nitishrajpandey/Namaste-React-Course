import { configureStore } from "@reduxjs/toolkit"
import accountReducer from "./Slices/accountSlice"
import bonusReducer from "./Slices/bonusSlice"
import AsyncCallReducer from "./Slices/asyncSlice"

// create store

const Mystore = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer,
        AsyncCall: AsyncCallReducer
    }
})


export default Mystore;