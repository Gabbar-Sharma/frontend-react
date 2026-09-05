import { Outlet } from "react-router"
import Navbar from "../../components/Navbar"

function AuthLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default AuthLayout