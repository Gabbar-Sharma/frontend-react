import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
function mainLayout() {
  return (
    <div className=''>
     <Navbar />
     <Outlet />

    </div>
  )
}

export default mainLayout