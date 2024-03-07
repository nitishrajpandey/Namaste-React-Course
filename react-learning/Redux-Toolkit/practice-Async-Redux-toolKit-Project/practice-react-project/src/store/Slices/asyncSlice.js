import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// inital value 
const initialState = {
    idValue: 0,
    isLoding: false,
    isError: false
}

// api intial

export const getUserId = createAsyncThunk("AsyncCall/getUser",
    async (userId) => {
        const { data } = await axios.get(`https://api.github.com/users/${userId}`)
        return data.id
    })



// create slice

export const asyncCall = createSlice({
    name: "AsyncCall",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserId.fulfilled, (state, action) => {
            state.idValue = action.payload,
                state.isLoding = false
        })
        builder.addCase(getUserId.pending, (state) => {
            state.isLoding = true
        })
        builder.addCase(getUserId.rejected, (state) => {
            state.isLoding = false
            state.isError = true
        })
    }
})


export default asyncCall.reducer