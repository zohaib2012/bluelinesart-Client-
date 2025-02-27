import { configureStore } from "@reduxjs/toolkit";
import { commonapi } from "./commonslice";
import authReducer from "./authSlice"; 
export const store= configureStore({
    reducer:{
        auth: authReducer,
       [ commonapi.reducerPath]:commonapi.reducer
    },
middleware:(getDefaultmiddleware)=>getDefaultmiddleware().concat(commonapi.middleware)
})
