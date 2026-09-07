import Navbar from "../components/Navbar"
import Login from '../auth/Login'
import Register from "../auth/Register"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../features/createSlice"

function App() {
  const dispatch = useDispatch()
  const {count} = useSelector((store) => store.counter)
  return (
   <div>
      <p>Counter is {count}</p>
      <button onClick={() => dispatch(increment())}>Click +</button>
      <button onClick={() =>dispatch(decrement())}>Decrement -</button>
      
<Navbar />
<Login />
<Register/>
   </div>
  )
}

export default App