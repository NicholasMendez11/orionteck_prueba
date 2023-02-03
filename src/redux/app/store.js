import { configureStore } from "@reduxjs/toolkit";
import customerSlice from '../features/customers/customers';

export const store = configureStore({
    reducer:{
        customer:customerSlice,
    }
})