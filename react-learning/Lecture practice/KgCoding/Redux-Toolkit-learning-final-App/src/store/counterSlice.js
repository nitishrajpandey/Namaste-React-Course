import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counterValue: 0 },
    reducers: {
        increment: (state) => {
            state.counterValue++;

        },
        decrement: (state) => {
            state.counterValue--;
        },
        Add: (state, action) => {
            state.counterValue += Number(action.payload.num)

        },
        subtract: (state, action) => {
            state.counterValue -= Number(action.payload.num)
        }

    }
})

export const CounterAction = counterSlice.actions;

export default counterSlice