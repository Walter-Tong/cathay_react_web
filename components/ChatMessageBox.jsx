function ChatMessagegBox({message}) {
    return (
        <div>
            {message.role}
            <div>
                {message.content}
            </div>
        </div>
    )
}

export default ChatMessagegBox