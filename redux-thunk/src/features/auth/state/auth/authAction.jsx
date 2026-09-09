import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../../config/axiosInstance'


 export const authUserAction = createAsyncThunk("auth/login", async(creadential, thunkapi) =>{
    try{
        const res = await axiosInstance.post("auth/login", creadential)
        console.log(res.data)
    }
    catch{
        return thunkapi.rejectWithValue('login feild')
    }
})

