import { configureStore } from "@reduxjs/toolkit";
import RegisSlice from './reducer/RegisSlice';


export const store = configureStore({
    reducer: {
        RegisSlice
    }
})