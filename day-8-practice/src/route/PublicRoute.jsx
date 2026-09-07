import {Navigate, Outlet} from 'react-router'
import { useContext } from 'react'
import { Auth } from '../context-api/authContext'

function PublicRoute() {
    const {loggedIn} = useContext(Auth);
    if(loggedIn){
        return <Navigate to="/home" replace />
    }
  return (
    <Outlet/>
  )
}

export default PublicRoute