import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice.ts'
import gameReducer from './slices/configurationSlice.ts'
import statisticsReducer from './slices/statisticsSlice.ts'
import currentQuizReducer from './slices/currentQuizSlice.ts'

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, statisticsReducer)

export const store = configureStore({
  reducer: {
    statistics: persistedReducer,
    gameConfiguration: gameReducer,
    currentQuiz: currentQuizReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(apiSlice.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
