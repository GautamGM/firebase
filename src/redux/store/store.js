import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/userslice/userslice";

const store = configureStore({
    reducer:{
        user:userReducer
    }
})
export {store}