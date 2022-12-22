import React, { useContext, useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { ReadAutoContext } from "../Context/ReadAutoContext";

function Speak({ response, message }) {
    const { speak, cancel } = useSpeechSynthesis();
    const [isRead, setIsRead] = useState(false);
    const { isReadAuto } = useContext(ReadAutoContext);

    useEffect(() => {
        if (message) {
            speak({ text: message });
        }
    }, [message]);

    useEffect(() => {
        if (response && isReadAuto) {
            setIsRead(true);
            speak({ text: response });
        }
    }, [response]);

    const handleClick = () => {
        setIsRead(!isRead);
        if (isRead) cancel();
        if (!isRead && response) speak({ text: response });
    };

    return (
        <div className="flex gap-3 items-center">
            <button onClick={response ? handleClick : null}>
                <span
                    className={`primary-title speak mx-auto text-3xl md:text-4xl ${
                        isRead && "isSpeaking"
                    }`}
                >
                    PLAY
                </span>
            </button>
        </div>
    );
}

export default Speak;
