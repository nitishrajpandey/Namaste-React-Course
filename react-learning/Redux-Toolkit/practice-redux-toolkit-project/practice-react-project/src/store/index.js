import { configureStore } from "@reduxjs/toolkit"
import accountReducer from "./Slices/accountSlice"
import bonusReducer from "./Slices/bonusSlice"

// create store

const Mystore = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer
    }
})


export default Mystore;