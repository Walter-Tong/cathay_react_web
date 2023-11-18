import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import TopBar from '../components/topBar'
import HomePage from '../pages/HomePage'
import LLMChatBoxChat from '../components/LLMChatBoxChat'
import LLMChatBoxTranlate from '../components/LLMChatBoxTranlate'
import LLMChatBoxes from '../components/LLMChatBoxes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center'>
      <LLMChatBoxes />
    </div>
  )
}

export default App
