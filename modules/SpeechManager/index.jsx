import React, { useState, useEffect } from "react";
import Dictaphone from "../Dictaphone";
import { useAssistant } from "../hooks/useAssistant";
import Play from "../Dictaphone/Play";
import Speak from "../Speak";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import Image from "next/image";
import Reset from "../Dictaphone/Reset";
import SendQuestion from "../SendQuestion";

function SpeechManager() {
    const [question, setQuestion] = useState("");
    const [sendQuestion, setSendQuestion] = useState(false);
    const { fetchResponse, response, setResponse, error } =
        useAssistant(question);
    const speechUtils = useSpeechRecognition();

    useEffect(() => {
        if (sendQuestion) {
            setResponse(fetchResponse(question));
            setSendQuestion(false);
        }
    }, [sendQuestion]);

    const handleSendQuestion = () => {
        setResponse(fetchResponse(question));
    };

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleReset = () => {
        speechUtils?.resetTranscript();
        setQuestion("");
    };

    return (
        <>
            <Dictaphone
                speechUtils={speechUtils}
                SpeechRecognition={SpeechRecognition}
                setQuestion={setQuestion}
                setSendQuestion={setSendQuestion}
            >
                <div className={"w-full flex justify-center mb-10 h-24"}>
                    <Play
                        SpeechRecognition={SpeechRecognition}
                        speechUtils={speechUtils}
                    />
                </div>
                <div className={"flex flex-col gap-3 w-full"}>
                    <textarea
                        placeholder="Vos instructions ici ..."
                        type="text"
                        onChange={handleChange}
                        value={question}
                        rows="4"
                        className="block p-2.5 w-full text-sm text-white bg-gray-900 rounded-lg border-none shadow-lg focus:outline-4"
                    />
                    <div className="flex justify-between items-center gap-5 px-2.5">
                        <Reset handleReset={handleReset} />
                        <Speak />
                        <SendQuestion handleSendQuestion={handleSendQuestion} />
                    </div>
                </div>
                <div className="w-full bg-white rounded-lg my-5 p-5">
                    {response?.choices[0]?.text}
                </div>
            </Dictaphone>
        </>
    );
}

export default SpeechManager;
