function ChatMessagegBox({ message }) {

    return (
        <div className="shadow m-1 rounded-2xl p-1">
            <div>
                <span className="font-bold text-lg">
                    {message.role.toUpperCase()}
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