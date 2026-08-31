import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/createSlice'
import AuthSlice from '../features/authSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: AuthSlice,
  },
})

