import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../Api/productApi";

const initialState = {
    products: [],
    pending: false
}

// api  async thunk calling
export const fetchAsync = createAsyncThunk("products/fetchProducts", async () => {
    const response = await productApi(); //api function 
    return response.data.products;
})


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsync.pending, (state) => {
                state.pending = true
            })
            .addCase(fetchAsync.fulfilled, (state, action) => {
                state.products = action.payload
                state.pending = false
            })
    }
})

export default productSlice.reducer