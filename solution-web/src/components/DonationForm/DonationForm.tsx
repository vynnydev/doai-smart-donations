import React, { useState } from 'react'
import axios from 'axios'

const DonationForm: React.FC = () => {
  const [donorName, setDonorName] = useState('')
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await axios.post('/store-donation', {
        donorName,
        amount,
        message,
      })
      setResponse(result.data.message)
    } catch (error) {
      console.error('Error processing donation:', error)
      setResponse('Could not process donation')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Donate</button>
      <p>{response}</p>
    </form>
  )
}

export default DonationForm
