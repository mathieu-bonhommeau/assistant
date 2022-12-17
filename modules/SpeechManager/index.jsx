import React, { useState } from "react";
import Dictaphone from "../Dictaphone";
import { useAssistant } from "../hooks/useAssistant";
import { useSpeechSynthesis } from "react-speech-kit";

function SpeechManager() {
    const [question, setQuestion] = useState("");
    const { fetchResponse, response, setResponse } = useAssistant(question);
    const { speak } = useSpeechSynthesis();

    const handleClick = () => {
        setResponse(fetchResponse(question));
    };

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    return (
        <>
            <div className={"flex flex-col gap-3"}>
                <textarea
                    type="text"
                    onChange={handleChange}
                    value={question}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                    className="w-full shadow-lg focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-black text-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                    onClick={handleClick}
                >
                    Envoi !
                </button>
            </div>
            <div>
                <Dictaphone setQuestion={setQuestion} />
            </div>
            <button
                className="w-full mt-5 shadow-lg focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-black text-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                onClick={() => speak({ text: response?.choices[0]?.text })}
            >
                Speak
            </button>
            <div className="w-full bg-white rounded-lg my-5">
                {response?.choices[0]?.text}
            </div>
        </>
    );
}

export default SpeechManager;
