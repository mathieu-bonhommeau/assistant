import Image from "next/image";
import React from "react";

function Reset({ handleReset }) {
    return (
        <button
            className="icon-wrapper icon-wrapper-reset"
            onClick={handleReset}
        >
            <Image
                className="icon icon-reset mx-auto"
                src={"/reset.png"}
                width={329}
                height={262}
                alt="send"
                priority={true}
            />
        </button>
    );
}

export default Reset;
