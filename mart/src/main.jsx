import AppRouter from './route/appRoute'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyContext from './context-api/MyContext'
import { AuthContext } from './context-api/authContext'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
   <MyContext>
    <AuthContext>
      <AppRouter />
      <ToastContainer/>
    </AuthContext>
    
  </MyContext>
)
