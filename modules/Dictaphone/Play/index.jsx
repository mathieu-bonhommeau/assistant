import Image from "next/image";
import React from "react";

function Play({ SpeechRecognition, speechUtils }) {
    const { listening } = speechUtils;
    return listening
        ? displayVocal(SpeechRecognition)["start"]
        : displayVocal(SpeechRecognition)["stop"];
}

const displayVocal = (SpeechRecognition) => {
    return {
        stop: (
            <button
                type="button"
                className="mx-auto md:hover:scale-125 transition-all w-24 h-24 sm:w-48 sm:w-48"
                onClick={() => {
                    SpeechRecognition.startListening();
                }}
            >
                <Image
                    className="w-full h-full"
                    src="/voice.svg"
                    alt="Next.js Logo"
                    width={512}
                    height={512}
                    priority={true}
                />
            </button>
        ),
        start: (
            <div id="bars" onClick={() => SpeechRecognition.stopListening()}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        ),
    };
};

export default Play;
