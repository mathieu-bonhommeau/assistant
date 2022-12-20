import React, { useState, useEffect } from "react";
import Dictaphone from "../Dictaphone";
import { useAssistant } from "../hooks/useAssistant";
import Play from "../Dictaphone/Play";
import Speak from "../Speak";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import Reset from "../Dictaphone/Reset";
import SendQuestion from "../SendQuestion";
import { useRouter } from "next/router";

function SpeechManager() {
    const [question, setQuestion] = useState("");
    const [sendQuestion, setSendQuestion] = useState(false);
    const { fetchResponse, response, setResponse, error, isLoading, isInit } =
        useAssistant(question);
    const speechUtils = useSpeechRecognition();
    const router = useRouter();

    useEffect(() => {
        if (sendQuestion) {
            setResponse(fetchResponse(question));
            setSendQuestion(false);
        }
    }, [sendQuestion]);

    useEffect(() => {
        if (response) {
            router.push("/#response");
        }
    }, [response]);

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
                    <div
                        id="response"
                        className="flex justify-between items-center gap-5 px-2.5"
                    >
                        <Reset handleReset={handleReset} />
                        <Speak response={response} />
                        <SendQuestion handleSendQuestion={handleSendQuestion} />
                    </div>
                </div>
                {getResponseContent(isLoading, isInit, response)}
            </Dictaphone>
        </>
    );
}

const getResponseContent = (isLoading, isInit, response) => {
    if (isInit) {
        return (
            <div className="ready py-10 text-2xl opacity-90 md:text-3xl text-center">
                READY .... !!
            </div>
        );
    }
    if (!isInit && isLoading) {
        return (
            <div className="flex justify-center py-10">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
    if (!isInit && !isLoading) {
        return (
            <div className="response-box w-full bg-zinc-900 text-white rounded-lg my-5 p-5">
                {response}
            </div>
        );
    }
};

export default SpeechManager;
