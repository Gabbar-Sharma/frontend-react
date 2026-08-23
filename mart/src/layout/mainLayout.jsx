import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
function mainLayout() {
  return (
    <div>
     <Navbar />
     <Outlet />

    </div>
  )
}

export default mainLayout