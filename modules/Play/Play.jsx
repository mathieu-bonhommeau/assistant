import Image from "next/image";
import React from "react";

function Play({ setPlay, play }) {
    console.log("🚀 ~ file: Play.jsx:5 ~ Play ~ play", play);

    return !play ? (
        <button
            type="button"
            className="mx-auto"
            onClick={() => {
                setPlay(true);
            }}
        >
            <Image
                className="w-48 sm:w-24"
                src="/voice.svg"
                alt="Next.js Logo"
                width={512}
                height={512}
                priority
            />
        </button>
    ) : (
        <div id="bars" onClick={() => setPlay(false)}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    );
}

export default Play;
