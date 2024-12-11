import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { app } from "../../../firebase/config/fireconfig";


export createuser=createAsyncThunk(
    ""
)



const userSlice=createSlice({
    name:"user",
    initialState:{
        userDetail:[],
        isLoading:true,
        error:null
    }
})
export const userReducer=userSlice.reducer