function ChatMessagegBox({ message }) {
  return (
    <div className="m-2 border-b-2 pb-2">
      <div>
        <span className="text-lg font-bold">{message.role.toUpperCase()}</span>
      </div>
      <div>
        <span className="text-left">{message.content}</span>
      </div>
    </div>
  )
}

export default ChatMessagegBox
