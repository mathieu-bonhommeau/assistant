import React from "react";
import { IoIosMic } from "react-icons/io";

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
                className="icon-wrapper icon-wrapper-play"
                onClick={() => {
                    SpeechRecognition.startListening();
                }}
            >
                <IoIosMic className="icon icon-play mx-auto" />
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
