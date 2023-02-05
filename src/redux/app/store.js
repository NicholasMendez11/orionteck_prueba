import { configureStore } from "@reduxjs/toolkit";
import customerSlice from '../features/customers/customers';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig ={
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    customer:customerSlice,
})

const persitedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer:persitedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})