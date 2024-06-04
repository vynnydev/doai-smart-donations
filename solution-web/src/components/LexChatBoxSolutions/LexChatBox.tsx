import React, { useState } from 'react'
import AWS from 'aws-sdk'

AWS.config.region = 'us-east-1' // Região onde o bot está configurado
const lexRuntime = new AWS.LexRuntime()

const LexChatBot: React.FC = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSendMessage = async () => {
    const params = {
      botAlias: 'BotAlias',
      botName: 'DoAI',
      inputText: input,
      userId: 'user-id-1',
    }

    try {
      const response = await lexRuntime.postText(params).promise()
      setMessages((prevMessages) => [
        ...prevMessages,
        `You: ${input}`,
        `Bot: ${response.message}`,
      ])
      setInput('')
    } catch (error) {
      console.error('Error with Lex bot:', error)
    }
  }

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default LexChatBot
