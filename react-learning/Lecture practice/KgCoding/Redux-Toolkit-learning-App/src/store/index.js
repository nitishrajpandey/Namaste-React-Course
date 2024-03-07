import { configureStore, createSlice } from "@reduxjs/toolkit"

// create a slice of counter

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



const privacySlice = createSlice({
    name: "privacy",
    initialState: false,
    reducers: {
        toggle: (state) => {
            return state = !state
        }
    }
})

export const privacyAction = privacySlice.actions;




// create store
const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
})

export default counterStore;