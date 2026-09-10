import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../config/axiosInstance";
import { hydrationApi } from "../../api/authApi";

export const authUserAction = createAsyncThunk(
    "auth/login",

    async (credential, thunkAPI) => {
        try {
            const res = await axiosInstance.post(
                "auth/login",
                credential
            );

            console.log("LOGIN:", res.data);

            localStorage.setItem(
                "accessToken",
                res.data.accessToken
            );

            return res.data;

        } catch (error) {

            console.log("LOGIN ERROR:", error.response?.data);

            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);


export const hydrateUser = createAsyncThunk("auth/hydrate", async(_, thunkAPI) =>{
       try{
            const user = await hydrationApi()
            return user;
       }
        catch(error){
        console.log(error)
        localStorage.removeItem('accessToken')
        return thunkAPI.rejectWithValue("expired session")
       }

})