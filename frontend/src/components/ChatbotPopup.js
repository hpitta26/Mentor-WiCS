import React, {useState} from 'react'
import './ChatbotPopup.css'


function ChatbotPopup() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [isOpen, setIsOpen] = useState(false)


    const handleInputChange = (e) => {
        setInput(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
    
        // Add user message to chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: input, sender: 'user' },
        ])
    
        // Clear input
        setInput('')
    
        try {
            // const response = await fetch('/api/chatbot', {
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ message: input }),
            // })
    
            // const data = await response.json()
            // // Add bot reply to chat
            // setMessages((prevMessages) => [
            //     ...prevMessages,
            //     { text: data.reply, sender: 'bot' },
            // ])
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Bot Response', sender: 'bot' },
            ])

        } catch (error) {
            console.error('Error sending message:', error)
        }
    }
    

    const toggleChat = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div className="chatbot-popup">
            <button className="chatbot-toggle" onClick={toggleChat}>
                {isOpen ? 'Close' : 'Chat'}
            </button>
            {isOpen && (
                <div className="chat-window">
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="chat-input">
                        <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                        required
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default ChatbotPopup