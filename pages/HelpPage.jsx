import Show360Image from '../components/Show360Image'
import InputId from '../components/InputId'
import { useState, useEffect } from 'react'

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
      <InputId />
      {imgToShow}
    </div>
  )
}

export default HelpPage
