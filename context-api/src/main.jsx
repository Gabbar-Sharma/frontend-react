import { createRoot } from 'react-dom/client'
import './index.css'
import ContextProvider from './context/MyContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
