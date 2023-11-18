import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import TopBar from '../components/topBar'
import HomePage from '../pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center'>
      <TopBar />
      <Routes>
        <Route path="/about" element={<div>About</div>}>
        </Route>
        <Route path="/contact" element={<div>Contact</div>}>
        </Route>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
