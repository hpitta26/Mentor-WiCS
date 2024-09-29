import React, {useState} from 'react'
import './ChatbotPopup.css'

import axios from 'axios'


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
    
        setInput('') // Clear input
    
        try {
            const response = await axios.post('http://localhost:8000/api/chatbot', {
                message: input,
            })

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Bot Response', sender: 'bot' },
            ])

            // setMessages((prevMessages) => [
            //     ...prevMessages,
            //     { text: response.data.reply, sender: 'bot' },
            // ])

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