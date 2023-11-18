import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import TopBar from '../components/topBar'
import HomePage from '../pages/HomePage'
import LLMChatBoxChat from '../components/LLMChatBoxChat'
import LLMChatBoxTranlate from '../components/LLMChatBoxTranlate'
import LLMChatBoxes from '../components/LLMChatBoxes'
import Show360Image from '../components/Show360Image'
import Image360List from '../components/Image360List'
import ChatMessagegBox from '../components/ChatMessageBox'

function App() {
  const [count, setCount] = useState(0)

  const [imgToShow, setImgToShow] = useState(null)

  useEffect(() => {
    const location = window.location;

    console.log(location)

    const toGo = location.search

    if (toGo) {
      setImgToShow(<Show360Image path={toGo.slice(1)} />)
    }

  }, [])

  return (
    <div className='flex'>
      <LLMChatBoxes />
      {imgToShow}
    </div>
  )
}

export default App
