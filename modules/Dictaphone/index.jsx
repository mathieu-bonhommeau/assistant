import React, { useEffect, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import Image from "next/image";

const Dictaphone = ({ setQuestion, setSendQuestion, play, setPlay }) => {
    const [isListen, setIsListen] = useState(false);
    const [speechRecognitionSupported, setSpeechRecognitionSupported] =
        useState(null);
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    useEffect(() => {
        // sets to true or false after component has been mounted
        setSpeechRecognitionSupported(browserSupportsSpeechRecognition);
    }, [browserSupportsSpeechRecognition]);

    useEffect(() => {
        setQuestion(transcript);
    }, [setQuestion, transcript]);

    useEffect(() => {
        if (listening) setIsListen(true);
        if (!listening && isListen) {
            setSendQuestion(true);
            setIsListen(false);
            setPlay(false);
        }
    }, [listening, isListen, setSendQuestion]);

    useEffect(() => {
        if (play) SpeechRecognition.startListening();
        if (!play) SpeechRecognition.stopListening();
    }, [play]);

    if (speechRecognitionSupported === null) return null;

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <div>
            <div className="w-full flex justify-between">
                <div className="flex gap-4">
                    <button
                        className="rounded px-4 py-2 bg-cyan-500"
                        onClick={resetTranscript}
                    >
                        <BiReset />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Dictaphone;
