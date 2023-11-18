import { useState } from "react";
import LLMChatBoxChat from "./LLMChatBoxChat";
import ChatMessagegBox from "./ChatMessageBox";
import LLMChatBoxTranlate from "./LLMChatBoxTranlate";

function LLMChatBoxes() {
    const [chatMode, setChatMode] = useState(true)

    const [previousMessages, setPreviousMessages] = useState([])

    const handleClick = () => {
        setChatMode(!chatMode)
        setPreviousMessages([])
    }

    const handleAssClick = () => {
        setChatMode(true)
    }

    

    return (
        <div>
            <div onClick={handleClick}>
                {(!chatMode) ? "Switch to flight assiant" : "Switch to translator"}
            </div>
            <div className="overflow-auto max-h-[65vh]">
                {previousMessages.map((msg, i) => <ChatMessagegBox message={msg} key={i} />)}
            </div>
            {(chatMode) ? <LLMChatBoxChat previousMessages={previousMessages} setPreviousMessages={setPreviousMessages}/> : <LLMChatBoxTranlate />}
        </div>
    )
}

export default LLMChatBoxes