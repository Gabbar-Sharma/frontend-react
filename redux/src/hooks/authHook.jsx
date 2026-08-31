import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get registered users from localStorage
  const [registerUsers, setRegisterUsers] = useState(
  JSON.parse(localStorage.getItem("registerSave") || "[]")
);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // REGISTER
  const registerForm = (data) => {
    const arr = [...registerUsers, data];
    setRegisterUsers(arr);
    localStorage.setItem("registerSave", JSON.stringify(arr));
    toast.success("New register user");
    reset();
    navigate("/login");
  };

  // LOGIN
  const loginForm = (data) => {
    const users = registerUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    // User nahi mila
    if (!users) {
      console.log("Invalid user");
      toast.error("Invalid User. Please create account");
      reset();
      return;
    }

    // User mil gaya
    localStorage.setItem("userLoggedIn", JSON.stringify(users));
    dispatch(addUser(users));
    toast.success("User logged in");
    reset();

    navigate("/");
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginForm,
    registerForm,
  };
};
