
import axiosInstance from "../../../config/axiosInstance";


export const loginApi = async(creadential) =>{
    try{
         let res =  await axiosInstance.post("auth/login", creadential)
         console.log(res)
         
         return res.data
    } catch(error){
        console.log('error aa gya hai sir', error)
    }
}

export const hydrationApi = async() =>{
      
    const token = localStorage.getItem("accessToken")
    try{

    if (!token) {
        return null;
        
        
    }
         let res =  await axiosInstance.get("auth/me", {
            headers: {
                Authorization: `Bearer ${token}` 
            },
         })
        
         console.log(res)
         return res.data
    } catch(error){
        console.log('error aa gya hai sir', error)
        throw error;
    }
}