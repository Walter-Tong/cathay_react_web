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
    <div className="fixed bottom-14 left-0 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center border-t-2 border-[#005D63] border-opacity-30">
        <input
          type="text"
          value={inputText}
          placeholder={msgToShow}
          onChange={() => setInputText(event.target.value)}
          className="mr-2 h-11 w-full rounded-none bg-[#005D63] bg-opacity-10 p-2 pl-[0.625rem]"
        />
        <button type="submit" className="mr-2">
          Send
        </button>
      </form>
    </div>
  )
}

export default LLMChatBoxTranlate
