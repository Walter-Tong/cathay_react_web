import { useEffect, useState } from 'react'
import axios from 'axios'
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

    const xhr = new XMLHttpRequest();
    const url = 'https://developers.cathaypacific.com/hackathon-apigw/airport/customers/510892B000014EBB/details';

    xhr.open('GET', url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('apiKey', 'FMw5lJSZPyXwiEYAboABtCXoJqn7GHzn');

    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        // Process the response data here
        console.log(response);
      } else {
        console.error('Request failed with status:', xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error('Request failed.');
    };

    xhr.send();

  }, [])

  return (
    <div className='flex'>
      <LLMChatBoxes />
      {imgToShow}
    </div>
  )
}

export default App
