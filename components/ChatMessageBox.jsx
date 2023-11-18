function ChatMessagegBox({ message }) {

    return (
        <div className="mx-4">
            <div>
                <span>
                    {message.role}
                </span>
            </div>
            <div>
                <span className="text-left">
                    {message.content}
                </span>
            </div>
        </div>
    )
}

export default ChatMessagegBox