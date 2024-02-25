import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice.ts'
import gameReducer from './slices/configurationSlice.ts'
import statisticsReducer from './slices/statisticsSlice.ts'
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

const rootReducer = combineReducers({
  gameConfiguration: gameReducer,
  statistics: statisticsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
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
