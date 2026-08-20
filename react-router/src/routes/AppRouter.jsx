import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Project from '../pages/project'
import Skill from '../pages/skill'
import Experince from '../pages/experince'


import { Routes, Route } from "react-router"

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/About' element={<About/>} />
     <Route path='/Contact' element={<Contact/>} />
        <Route path='/Project' element={<Project/>} />
           <Route path='/Skill' element={<Skill/>} />
           <Route path='/Experince' element={<Experince/>} />
        

       
      </Routes>
    </div>
  )
}

export default AppRouter