
import { useSelector } from "react-redux"
import { Outlet , Navigate } from "react-router"


function ProtectedRoute() {
    const {user} = useSelector((store) => store.auth)
    if(!user){
        return <Navigate to={'/'} replace />
    }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedRoute