import { useState } from "react";
import LLMChatBoxChat from "./LLMChatBoxChat";
import ChatMessagegBox from "./ChatMessageBox";
import LLMChatBoxTranlate from "./LLMChatBoxTranlate";

function LLMChatBoxes() {
    const [chatMode, setChatMode] = useState(true)

    const [previousMessages, setPreviousMessages] = useState([])

    return (
        <div className="w-screen">
            <div className="flex flex-row p-1 text-lg font-bold shadow m-1 rounded-2xl">
                <div onClick={() => {setChatMode(true); setPreviousMessages([])}} className={((chatMode) ? "w-1/2 bg-[#005D63] p-2 rounded-2xl" : "w-1/2 p-2 rounded-2xl")}>
                    Assistant
                </div>
                <div onClick={() => {setChatMode(false); setPreviousMessages([])}} className={((!chatMode) ? "w-1/2 bg-[#005D63] p-2 rounded-2xl" : "w-1/2 p-2 rounded-2xl")}>
                    Translator
                </div>
            </div>
            <div className="overflow-auto max-h-[65vh]">
                {previousMessages.map((msg, i) => <ChatMessagegBox message={msg} key={i} />)}
            </div>
            {(chatMode) ? <LLMChatBoxChat previousMessages={previousMessages} setPreviousMessages={setPreviousMessages}/> : <LLMChatBoxTranlate />}
        </div>
    )
}

export default LLMChatBoxes