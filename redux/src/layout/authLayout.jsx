import {Outlet} from 'react-router'

function authLayout() {
  return (
    <div className='bg-yellow-500 '>
         
        <Outlet />
    </div>
  )
}

export default authLayout