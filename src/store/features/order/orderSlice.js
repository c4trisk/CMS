import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import orderService from './orderService'

const initialState = {
  order: null,
  error: null,
  loading: false
}


export const getOrderById = createAsyncThunk('orders/getById', async (payload, thunkAPI) => {
  try {
    return await orderService.getOrderByIdAsync(payload)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Get Order by ID
      .addCase(getOrderById.pending, state => {
        state.loading = true
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = false
        state.order = action.payload
        state.error = null
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false
        state.order = null
        state.error = action.payload
      })
  }
})

export default orderSlice.reducer