import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productService from './productService'

const initialState = {
  product: null,
  error: null,
  loading: false
}


export const getProductById = createAsyncThunk('products/getById', async (payload, thunkAPI) => {
  try {
    return await productService.getByIdAsync(payload)
  } catch (error) {
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const updateProduct = createAsyncThunk('products/update', async(payload, thunkAPI) => {
  const { id, formData } = payload
  try {
    return await productService.updateAsync(id, formData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const deleteProduct = createAsyncThunk('products/delete', async (payload, thunkAPI) => {
  try {
    return await productService.deleteAsync(payload)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get product by id
      .addCase(getProductById.pending, state => {
        state.loading = true
      } )
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload
        state.error = null
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false
        state.post = null
        state.error = action.payload
      })

      // Updating product
      .addCase(updateProduct.pending, state => {
        state.loading = true
      } )
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload 
        state.error = null
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false
        state.product = null
        state.error = action.payload
      })

      // Deleting product
      .addCase(deleteProduct.pending, state => {
        state.loading = true
      })
      .addCase(deleteProduct.fulfilled, state => {
        state.loading = false
        state.product = null
        state.error = null
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false
        state.product = null
        state.error = action.payload
      })
  }
})

export default productSlice.reducer