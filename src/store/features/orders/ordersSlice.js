import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ordersService from './ordersService'

const initialState = {
  orders: [],
  error: null,
  loading: false
}

export const getAllOrders = createAsyncThunk('orders/getAll', async (_, thunkAPI) => {
  try {
    return await ordersService.getAllOrdersAsync()
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all orders
      .addCase(getAllOrders.pending, state => {
        state.loading = true
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false
        state.orders = action.payload
        state.error = null
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default ordersSlice.reducer