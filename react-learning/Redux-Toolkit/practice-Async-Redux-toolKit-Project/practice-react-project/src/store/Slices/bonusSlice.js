import { createAction, createSlice } from "@reduxjs/toolkit";

// inital value 

const initialState = {
    point: 0
}

// agar amount 100 se jada ekk bar me add hua to bonus point 1 auto mattic badh jayega using extra reducer


// jisse compare kar point badhna hai 
const inccbyamount = createAction("account/incrementByAmount")





// create slice

export const bonusSlice = createSlice({
    name: "bonus",
    initialState,
    reducers: {
        increment: (state) => {
            state.point += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(inccbyamount, (state, action) => {
            if (action.payload >= 100) {
                state.point += 1
            }
        })
    }
})


export const { increment } = bonusSlice.actions

export default bonusSlice.reducer