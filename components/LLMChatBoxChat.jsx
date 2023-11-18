import { useState } from "react";
import ChatMessagegBox from "./ChatMessageBox";

async function sendChatRequest(system, userPrompts, previousMessages, setPreviousMessages) {
    const url = 'http://localhost:1234/v1/chat/completions';
    const payload = {
        messages: [
            { role: 'system', content: system },
            ...previousMessages,
            { role: 'user', content: userPrompts },
        ],
        temperature: 1,
        max_tokens: -1,
        stream: false
    };

    //console.log(payload.messages)

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.choices[0].message.content);
            setPreviousMessages([...previousMessages, payload.messages[payload.messages.length - 1], { role: "assistant", content: data.choices[0].message.content }])
            // Do something with the response data

        }
    } catch (error) {
        console.error('Request failed with error:', error);
    }
}

function LLMChatBoxChat() {
    const system = 'You are ChatGPT, a large language model trained by OpenAI, based on the GPT-3.5 architecture.'

    const [previousMessages, setPreviousMessages] = useState([])

    const [inputText, setInputText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        sendChatRequest(system, inputText, previousMessages, setPreviousMessages)
        setInputText("")
    };

    return (
        <div>
            {previousMessages.map((msg, index) => <ChatMessagegBox message={msg} key={index} />)}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputText}
                    placeholder="Type your message here"
                    onChange={() => setInputText(event.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default LLMChatBoxChat