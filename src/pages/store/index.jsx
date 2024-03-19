import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./slice/UserSlice";
export const store = configureStore({
    reducer : {
     user: useReducer,
    }

})