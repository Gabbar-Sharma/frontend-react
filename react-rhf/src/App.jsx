import Form from './components/Form'
import UserCard from './components/UserCard'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [showUsers, setShowUser] = useState(false)

  const handleDelete = (index) => {
    setUsers((users) => {
      return users.filter((newUser, i) => i !== index)
    })
  }
  return (
    <div className="">
      <header className='fixed top-0 left-0 z-50 w-full'>
        <Navbar setShowUser={setShowUser} />
      </header>

      {showUsers ? (
       <div className="mt-24">
         <Form setUsers={setUsers} setShowUser={setShowUser} className="w-25 h-auto" />
       </div>
      ) : (<div className="grid mt-24 grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {users.map((UserData, index) => (
      <UserCard
        key={index}
        name={UserData.name}
        email={UserData.email}
        mobile={UserData.mobile}
        url={UserData.url}
        onDelete={() => handleDelete(index)}
      />
    ))}
  </div>
      )}
    </div>
  )
}

export default App