import { useSelector } from "react-redux"
import { Outlet , Navigate } from "react-router"


function PublicRoute() {
    const {user} = useSelector((store) => store.auth)
    if (user) {
        return <Navigate to={'/main/home'} replace /> 
    }
  return (
    <div>
     <Outlet />
    </div>
  )
}

export default PublicRoute