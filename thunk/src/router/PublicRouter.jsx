import { useSelector } from 'react-redux'
import {Outlet , Navigate} from 'react-router'

function PublicRouter() {
     
    const {user} = useSelector((store) => store.auth)
    if (user) {
        return <Navigate to={'/main/home'} replace /> 
    }
    console.log("PUBLIC USER:", user);
  return <Outlet />
}

export default PublicRouter