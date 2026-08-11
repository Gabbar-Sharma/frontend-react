import Form from './components/Form'
import UserCard from './components/UserCard'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [user, setUsers] = useState([])
  return (
    <div className="">
     <header className='fixed top-0 left-0 z-50 w-full'>  <Navbar /> </header>
      <Form setUsers={setUsers} className="w-25 h-auto" />
    
    {user.map((UserData, index) =>{
        <UserCard
        key={index}
        name={UserData.name}
        email={UserData.email}
        mobile={UserData.mobile}
        image={UserData.image}
        />
    })}


    </div>
  )
}

export default App