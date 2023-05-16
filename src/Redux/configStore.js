import { configureStore } from "@reduxjs/toolkit";
import sinhVienReducer from './reduce/sinhVienReducer'

export const store = configureStore({
    reducer:{
        sinhVienReducer:sinhVienReducer
           
    }
})
