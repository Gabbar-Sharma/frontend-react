
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/auth/authSlice";
import { authUserAction } from "../state/auth/authAction";

const useAuth = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  // create useState for collect registerUsers
 
     
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


   const registerForm = (data) =>{
    console.log(data)
   }
 const loginForm = async(data) => {
    try{
      let response = await loginApi(data)
    console.log(response)
    localStorage.setItem("accessToken", response.accessToken);
    dispatch(addUser(authUserAction(data)))
    
    } catch(error){
      console.log('error kyu de rhe ho', error)
    }
    

  };


  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginForm,
    registerForm
    
  };
}

export default useAuth;