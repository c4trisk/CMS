import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  admin: null,
  loading: false,
  error: null
}


export const loginAdmin = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
  try {
    return await authService.login(payload)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.admin = null
    }
  },
  extraReducers: builder => {
    builder
      // log in user
      .addCase(loginAdmin.pending, state => {
        state.loading = true
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false
        state.admin = action.payload
        state.error = null
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false
        state.admin = null
        state.error = action.payload
      })
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer