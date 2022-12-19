import Image from "next/image";
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function Speak({ response }) {
    const { speak } = useSpeechSynthesis();

    return (
        <div className="relative md:hover:scale-125 transition-all">
            <button
                className="w-16 h-16 md:hover:scale-125 transition-all"
                onClick={() => speak({ text: response?.choices[0]?.text })}
            >
                <Image
                    src={"/vocal.png"}
                    width={329}
                    height={262}
                    alt="send"
                    priority={true}
                />
            </button>
            <div className="absolute w-full h-full z-10 bg-black top-0 left-0 opacity-50"></div>
        </div>
    );
}

export default Speak;
