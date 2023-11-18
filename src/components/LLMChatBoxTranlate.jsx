import { useState } from 'react'

async function sendChatRequest(system, userPrompts) {
  const url = 'http://localhost:1234/v1/chat/completions'
  const payload = {
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: userPrompts },
    ],
    temperature: 1,
    max_tokens: -1,
    stream: false,
  }

  //console.log(payload.messages)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data.choices[0].message.content)
      // Do something with the response data
    }
  } catch (error) {
    console.error('Request failed with error:', error)
  }
}

function LLMChatBoxTranlate() {
  const system =
    'You will be given a request to flight attendant, the message could be in any language, translate and rephase the request to english and a smooth and a easy to read tone'

  //const [previousMessages, setPreviousMessages] = useState([])

  const [inputText, setInputText] = useState('')

  const [msgToShow, setMsgToShow] = useState('Type your request here')

  const handleSubmit = event => {
    event.preventDefault()
    sendChatRequest(system, inputText)
    setInputText('')
    setMsgToShow('Your message have submit to flight attendant')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder={msgToShow}
          onChange={() => setInputText(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default LLMChatBoxTranlate
