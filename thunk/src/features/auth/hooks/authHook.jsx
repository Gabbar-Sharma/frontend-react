import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../state/auth/authSlice";

const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch
  const [registerUsers, setRegisterUsers] = useState(
   JSON.parse(localStorage.getItem("registerUserSave")) || []
  )
     
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
  const registerForm = (data) => {
      const arr = [...registerUsers, data]
    setRegisterUsers(arr);
    localStorage.setItem('registerUserSave' , JSON.stringify(arr))
    reset()
    navigate('/login')
  };
  
 const loginForm = (data) => {
    const users = registerUsers.find((val) => {
        return data.email === val.email && data.password === val.password
    })
    if(!users){
        console.log('Something went wrong');
        toast.error("Invalid User. Please create account");
        reset()
        return;
        
    }
    localStorage.getItem('userLoggedIn', JSON.stringify(users));
     dispatch(addUser(users));
     toast.success("User logged in");
    reset()
    navigate('/home')

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