import { useState } from 'react'
import LLMChatBoxChat from './LLMChatBoxChat'
import ChatMessagegBox from './ChatMessageBox'
import LLMChatBoxTranlate from './LLMChatBoxTranlate'

function LLMChatBoxes() {
  const [chatMode, setChatMode] = useState(true)

  const [previousMessages, setPreviousMessages] = useState([])

  return (
    <div className="w-full">
      <div className="flex items-center border-2 border-[#005D63] border-opacity-30 font-semibold">
        <div
          onClick={() => {
            setChatMode(true)
            setPreviousMessages([])
          }}
          className={
            'flex w-1/2 justify-center p-2 text-[#005D63] ' +
            (chatMode ? 'bg-[#005D63] bg-opacity-10' : '')
          }>
          Ask Questions
        </div>
        <div
          onClick={() => {
            setChatMode(false)
            setPreviousMessages([])
          }}
          className={
            'flex w-1/2 justify-center p-2 text-[#005D63] ' +
            (!chatMode ? 'bg-[#005D63] bg-opacity-10' : '')
          }>
          Request Services
        </div>
      </div>
      <div className="overflow-scroll">
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
