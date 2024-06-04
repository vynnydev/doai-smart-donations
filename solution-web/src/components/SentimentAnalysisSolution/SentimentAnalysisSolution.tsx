import React, { useState } from 'react'
import axios from 'axios'

const SentimentAnalysis: React.FC = () => {
  const [message, setMessage] = useState('')
  const [sentiment, setSentiment] = useState('')

  const handleAnalyze = async () => {
    try {
      const result = await axios.post('/analyze-sentiment', { message })
      setSentiment(result.data.Sentiment)
    } catch (error) {
      console.error('Error analyzing sentiment:', error)
      setSentiment('Could not analyze sentiment')
    }
  }

  return (
    <div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleAnalyze}>Analyze Sentiment</button>
      <p>Sentiment: {sentiment}</p>
    </div>
  )
}

export default SentimentAnalysis
