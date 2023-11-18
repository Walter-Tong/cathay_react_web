import { useEffect, useState } from 'react'
import LLMChatBoxes from '../components/LLMChatBoxes'
import Show360Image from '../components/Show360Image'

function HelpPage() {
  const [imgToShow, setImgToShow] = useState(null)

  useEffect(() => {
    const location = window.location

    console.log(location)

    const toGo = location.search

    if (toGo) {
      setImgToShow(<Show360Image path={toGo.slice(1)} />)
    }
  }, [])

  return (
    <div className="flex">
      <LLMChatBoxes />
      {imgToShow}
    </div>
  )
}

export default HelpPage
