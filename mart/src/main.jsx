import AppRouter from './route/appRoute'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyContext from './context-api/MyContext'


createRoot(document.getElementById('root')).render(
   <MyContext>
    <AppRouter />
  </MyContext>
)
