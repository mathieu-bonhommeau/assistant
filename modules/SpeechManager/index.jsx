import React, { useState, useEffect } from "react";
import Dictaphone from "../Dictaphone";
import { useAssistant } from "../hooks/useAssistant";
import { useSpeechSynthesis } from "react-speech-kit";
import Image from "next/image";
import Play from "../Play/Play";

function SpeechManager() {
    const [question, setQuestion] = useState("");
    const [sendQuestion, setSendQuestion] = useState(false);
    const { fetchResponse, response, setResponse } = useAssistant(question);
    const [play, setPlay] = useState(false);
    console.log("🚀 ~ file: index.jsx:13 ~ SpeechManager ~ play", play);
    const { speak } = useSpeechSynthesis();

    useEffect(() => {
        if (sendQuestion) {
            setResponse(fetchResponse(question));
            setSendQuestion(false);
        }
    }, [sendQuestion]);

    const handleClick = () => {
        setResponse(fetchResponse(question));
    };

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    return (
        <>
            <div className={"w-full flex justify-center mb-10 h-24"}>
                <Play setPlay={setPlay} play={play} />
            </div>
            <div className={"flex flex-col gap-3 w-full"}>
                <textarea
                    type="text"
                    onChange={handleChange}
                    value={question}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-white bg-gray-900 rounded-lg border-none shadow-lg focus:outline-4"
                />
                <button
                    className="w-full shadow-lg focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-black text-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                    onClick={handleClick}
                >
                    Envoi !
                </button>
            </div>
            <div>
                <Dictaphone
                    setQuestion={setQuestion}
                    setSendQuestion={setSendQuestion}
                    play={play}
                    setPlay={setPlay}
                />
            </div>
            <button
                className="w-full mt-5 shadow-lg focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-black text-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                onClick={() => speak({ text: response?.choices[0]?.text })}
            >
                Speak
            </button>
            <div className="w-full bg-white rounded-lg my-5 p-5">
                {response?.choices[0]?.text}
            </div>
        </>
    );
}

export default SpeechManager;
