import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter-slice'

export const store = configureStore({
  reducer: combineReducers({ counter: counterReducer })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
