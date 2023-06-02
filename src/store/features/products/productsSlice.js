import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
  error: null,
  loading: false
}

export const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {
    return await productsService.getAllAsync()
  } catch (error) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const addProduct = createAsyncThunk('products/add', async (productData, thunkAPI) => {
  try {
    return await productsService.addAsync(productData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all products
      .addCase(getAllProducts.pending, state => {
        state.loading = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products = action.payload
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // Add product
      .addCase(addProduct.pending, state => {
        state.loading = true
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products = [...state.products, action.payload]
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default productsSlice.reducer