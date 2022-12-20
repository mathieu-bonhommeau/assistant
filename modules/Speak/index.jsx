import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function Speak({ response }) {
    const { speak, cancel } = useSpeechSynthesis();
    const [isRead, setIsRead] = useState(false);

    useEffect(() => {
        if (response) {
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
        <button onClick={response ? handleClick : null}>
            <div
                className={`primary-title speak mx-auto text-3xl md:text-4xl ${
                    isRead && "isSpeaking"
                }`}
            >
                PLAY
            </div>
        </button>
    );
}

export default Speak;
