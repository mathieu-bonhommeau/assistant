import React, { useEffect, useState } from 'react'
import Dictaphone from '../Dictaphone'
import { useAssistant } from '../hooks/useAssistant'

function SpeechManager() {
    const [response, setResponse] = useState(null)
    const [question, setQuestion] = useState('')

    const { fetchResponse } = useAssistant(question)

    const handleClick = () => {
      setResponse(fetchResponse(question))
    }

    const handleChange = (event) => {
      setQuestion(event.target.value)
    }

    return (
    <>
      <div>
        <input type="text" onChange={handleChange} value={question}/>
        <button className="border p-3 gap-2" onClick={handleClick}>Envoi !</button>
      </div>
      <div>
        <Dictaphone setQuestion={setQuestion}/>
      </div>
    </>
  )
}

export default SpeechManager