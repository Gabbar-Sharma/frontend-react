import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../state/auth/authSlice";

const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // create useState for collect registerUsers
  const [registerUsers, setRegisterUsers] = useState(
   JSON.parse(localStorage.getItem("registerUserSave")) || []
  )
     
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // registerForm store data from UserForm 
  const registerForm = (data) => {
      const arr = [...registerUsers, data]
    setRegisterUsers(arr);
    localStorage.setItem('registerUserSave' , JSON.stringify(arr))
    toast.success('New User Register...')
    localStorage.setItem(
    "userLoggedIn",
    JSON.stringify(data)
     
  );
 // adding redux addUser means update redux
  dispatch(addUser(data));
// navigate home page
    navigate('main/home')
  };
  //if users are match from register and login register so redirect home page
 const loginForm = (data) => {
    const users = registerUsers.find((val) => {
        return data.email === val.email && data.password === val.password
    })
    // if user not match so genrate error
    if(!users){
        console.log('Something went wrong');
        toast.error("Invalid User. Please create account");
        reset()
        return;
        
    }
    // local storage adding a user login and update redux 
    localStorage.setItem('userLoggedIn', JSON.stringify(users));
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