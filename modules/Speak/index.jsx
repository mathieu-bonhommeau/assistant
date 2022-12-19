import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function Speak({ response }) {
    const { speak } = useSpeechSynthesis();
    const [readText, setReadText] = useState("");

    useEffect(() => {
        setReadText(response);
    });

    return (
        <button onClick={() => speak({ text: response?.choices[0]?.text })}>
            <div className="primary-title speak mx-auto text-3xl md:text-4xl">
                PLAY
            </div>
            {/* <HiSpeakerWave className="icon icon-speak mx-auto" /> */}
            {/* <Image
                className="icon icon-speak mx-auto"
                src={"/speaker.png"}
                width={329}
                height={262}
                alt="send"
                priority={true}
            /> */}
        </button>
    );
}

export default Speak;
