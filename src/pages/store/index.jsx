import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./slice/UserSlice";
import SearchSlice from "./slice/SearchSlice";
import ResipeSlice from "./slice/ResipeSlice";
export const store = configureStore({
    reducer : {
     user: useReducer,
     search: SearchSlice,
     resipe:ResipeSlice
    }

})