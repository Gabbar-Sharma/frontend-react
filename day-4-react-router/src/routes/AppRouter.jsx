import { Routes, Route } from "react-router"
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Project from '../pages/project'
import Skill from '../pages/skill'
import Experince from '../pages/experince'


function AppRouter() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
<Route path="/skills" element={<Skill />} />
<Route path="/projects" element={<Project />} />
<Route path="/experience" element={<Experince />} />
<Route path="/contact" element={<Contact />} />

       
      </Routes>
    </div>
  )
}

export default AppRouter