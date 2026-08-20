
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , Routes, Route } from "react-router";
import Home from './pages/home.jsx'
import About from './pages/about.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <App />
 </BrowserRouter>,
)
