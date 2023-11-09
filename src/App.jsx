
import { Route, Routes } from 'react-router-dom'
import './App.css'
import User from './Pages/User'
import Ditels from './Pages/Ditels'

function App() {
  return (
    <>
  

<Routes>
    <Route path='/' element={<User/>} />
    <Route path='/post/:id' element={<Ditels/>} />
    
</Routes>

    </>
  )
}

export default App
