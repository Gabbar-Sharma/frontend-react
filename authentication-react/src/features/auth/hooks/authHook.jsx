
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
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
     await dispatch(authUserAction(data)).unwrap()
      navigate("/main/home");
    
    } catch(error){
      console.log('error kyu de rhe ho', error)
    }
    

  };

 const logout = () => {
  localStorage.removeItem("accessToken");
  navigate("/login");
};

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginForm,
    registerForm,
    logout
    
  };
}

export default useAuth;