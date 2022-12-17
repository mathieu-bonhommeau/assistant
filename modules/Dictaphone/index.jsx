import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = ({setQuestion}) => {
  const [speechRecognitionSupported, setSpeechRecognitionSupported] = useState(null)

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
    console.log("🚀 ~ file: index.jsx:13 ~ Dictaphone ~ Transcript", transcript)

  useEffect(() => {
    // sets to true or false after component has been mounted
    setSpeechRecognitionSupported(browserSupportsSpeechRecognition) 
  }, [browserSupportsSpeechRecognition])

  useEffect(() => {
    setQuestion(transcript)
  }, [setQuestion, transcript])

  if (speechRecognitionSupported === null) return null

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <div>Microphone: {listening ? 'on' : 'off'}</div>
      <button className="border px-4 py-2" onClick={SpeechRecognition.startListening}>Start</button>
      <button className="border px-4 py-2" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className="border px-4 py-2" onClick={resetTranscript}>Reset</button>
    </div>
  );
};
export default Dictaphone;