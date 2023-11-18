import { useState } from 'react'
import LLMChatBoxChat from './LLMChatBoxChat'
import ChatMessagegBox from './ChatMessageBox'
import LLMChatBoxTranlate from './LLMChatBoxTranlate'

function LLMChatBoxes() {
  const [chatMode, setChatMode] = useState(true)

  const [previousMessages, setPreviousMessages] = useState([])

  return (
    <div className="w-screen">
      <div className="m-1 flex flex-row rounded-2xl p-1 text-lg font-bold shadow">
        <div
          onClick={() => {
            setChatMode(true)
            setPreviousMessages([])
          }}
          className={
            chatMode
              ? 'w-1/2 rounded-2xl bg-[#005D63] p-2'
              : 'w-1/2 rounded-2xl p-2'
          }>
          Assistant
        </div>
        <div
          onClick={() => {
            setChatMode(false)
            setPreviousMessages([])
          }}
          className={
            !chatMode
              ? 'w-1/2 rounded-2xl bg-[#005D63] p-2'
              : 'w-1/2 rounded-2xl p-2'
          }>
          Translator
        </div>
      </div>
      <div className="max-h-[65vh] overflow-auto">
        {previousMessages.map((msg, i) => (
          <ChatMessagegBox message={msg} key={i} />
        ))}
      </div>
      {chatMode ? (
        <LLMChatBoxChat
          previousMessages={previousMessages}
          setPreviousMessages={setPreviousMessages}
        />
      ) : (
        <LLMChatBoxTranlate />
      )}
    </div>
  )
}

export default LLMChatBoxes
