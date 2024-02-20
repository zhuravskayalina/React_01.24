import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice.ts'
import gameReducer from './slices/configurationSlice.ts'

export const store = configureStore({
  reducer: {
    gameConfiguration: gameReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
