import React, { useState } from 'react'
import axios from 'axios'

const ImageAnalysis: React.FC = () => {
  const [image, setImage] = useState<File | null>(null)
  const [labels, setLabels] = useState([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0])
    }
  }

  const handleAnalyze = async () => {
    if (!image) return

    const reader = new FileReader()
    reader.onloadend = async () => {
      const base64Image = reader.result?.toString().split(',')[1]

      try {
        const result = await axios.post('/analyze-image', {
          imageBase64: base64Image,
        })
        setLabels(result.data.Labels)
      } catch (error) {
        console.error('Error analyzing image:', error)
      }
    }

    reader.readAsDataURL(image)
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleAnalyze}>Analyze Image</button>
      <ul>
        {labels.map((label, index) => (
          <li key={index}>
            {label.Name} - {label.Confidence.toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageAnalysis
