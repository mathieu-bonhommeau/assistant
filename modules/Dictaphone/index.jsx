import React, { useEffect, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const Dictaphone = ({ setQuestion }) => {
    const [speechRecognitionSupported, setSpeechRecognitionSupported] =
        useState(null);

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();
    console.log(
        "🚀 ~ file: index.jsx:13 ~ Dictaphone ~ Transcript",
        transcript
    );

    useEffect(() => {
        // sets to true or false after component has been mounted
        setSpeechRecognitionSupported(browserSupportsSpeechRecognition);
    }, [browserSupportsSpeechRecognition]);

    useEffect(() => {
        setQuestion(transcript);
    }, [setQuestion, transcript]);

    if (speechRecognitionSupported === null) return null;

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div>
            <div>Microphone: {listening ? "on" : "off"}</div>
            <div className="w-full flex justify-between">
                <button
                    className="rounded px-4 py-2 bg-green-500"
                    onClick={SpeechRecognition.startListening}
                >
                    <AiFillPlayCircle />
                </button>
                <button
                    className="rounded px-4 py-2 bg-red-500"
                    onClick={SpeechRecognition.stopListening}
                >
                    <FaRegStopCircle />
                </button>
                <button
                    className="rounded px-4 py-2 bg-cyan-500"
                    onClick={resetTranscript}
                >
                    <BiReset />
                </button>
            </div>
        </div>
    );
};
export default Dictaphone;
