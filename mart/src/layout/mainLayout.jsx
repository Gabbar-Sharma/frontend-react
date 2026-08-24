import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
function mainLayout() {
  return (
    <div className='bg-black text-white '>
     <Navbar />
     <Outlet />

    </div>
  )
}

export default mainLayout