import { createSlice } from "@reduxjs/toolkit";

// create inital value 

const initialState = {
    amount: 0
}

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += Number(action.payload)
        }
    }
})

// action creatior

export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer