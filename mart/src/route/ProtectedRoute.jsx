import { useContext } from "react"
import { Outlet, Navigate } from "react-router"
import { Auth } from "../context-api/authContext"

function ProtectedRoute() {
    const {loggedIn} = useContext(Auth)
   
    if(!loggedIn){
       return <Navigate to="/Login" replace />
    }
  return (    
        <Outlet/>
  )
}

export default ProtectedRoute