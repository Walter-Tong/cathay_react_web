import { useState } from "react";
import LLMChatBoxChat from "./LLMChatBoxChat";
import LLMChatBoxTranlate from "./LLMChatBoxTranlate";

function LLMChatBoxes() {
    const [chatMode, setChatMode] = useState(true)

    return (
        <div>
            <div onClick={() => setChatMode(!chatMode)}>
                Switch Mode
            </div>
            {(chatMode) ? <LLMChatBoxChat /> : <LLMChatBoxTranlate />}
        </div>
    )
}

export default LLMChatBoxes