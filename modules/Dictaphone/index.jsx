import React, { useEffect, useState } from "react";

const Dictaphone = ({
    setQuestion,
    setSendQuestion,
    speechUtils,
    children,
}) => {
    const [isListen, setIsListen] = useState(false);
    const [speechRecognitionSupported, setSpeechRecognitionSupported] =
        useState(null);
    const { transcript, listening, browserSupportsSpeechRecognition } =
        speechUtils;

    useEffect(() => {
        // sets to true or false after component has been mounted
        setSpeechRecognitionSupported(browserSupportsSpeechRecognition);
    }, [browserSupportsSpeechRecognition]);

    useEffect(() => {
        setQuestion(transcript);
    }, [setQuestion, transcript]);

    useEffect(() => {
        if (listening) {
            setIsListen(true);
        }
        if (!listening && isListen) {
            setSendQuestion(true);
            setIsListen(false);
        }
    }, [listening, isListen, setSendQuestion, transcript]);

    if (speechRecognitionSupported === null) return null;

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <div>
            {browserSupportsSpeechRecognition}
            {children}
        </div>
    );
};
export default Dictaphone;
