function ChatMessagegBox({ message }) {
  return (
    <div className="m-1 rounded-2xl p-1 shadow">
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
