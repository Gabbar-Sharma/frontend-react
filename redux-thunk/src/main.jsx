
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRoute.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store.jsx'
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <ToastContainer />
     <AppRouter />
   </Provider>
 
 
)
