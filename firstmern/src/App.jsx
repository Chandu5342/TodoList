import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Router, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Users from './Users.jsx'
import CreateUser from './CreateUser.jsx'
import UpdateUser from './UpdateUser.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <div>
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<Users></Users>}></Route>
             <Route path='/create' element={<CreateUser></CreateUser>}></Route>
             <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>

         </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
