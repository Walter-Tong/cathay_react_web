import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center'>
        Hello World!
      </div>
    </>
  )
}

export default App
