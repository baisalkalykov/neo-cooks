import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./slice/UserSlice";
import SearchSlice from "./slice/SearchSlice";
export const store = configureStore({
    reducer : {
     user: useReducer,
     search: SearchSlice
    }

})