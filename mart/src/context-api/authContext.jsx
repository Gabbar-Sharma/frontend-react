import { createContext, useState } from "react";

const Auth = createContext()
 
export function AuthContext({children}) {
 const [registerUser, setRegisterUser] = useState(
  JSON.parse(localStorage.getItem('registerUser')) || []
);
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedUser")))
  console.log(registerUser)
  console.log(loggedIn)
  return (
    <Auth.Provider value={{registerUser, setRegisterUser, loggedIn, setLoggedIn}}>{children}</Auth.Provider>
  )
}

export { Auth }

// we are creating custom hooks in context api

