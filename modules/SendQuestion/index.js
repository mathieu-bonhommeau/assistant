import Image from "next/image";
import React from "react";

function SendQuestion({ handleSendQuestion }) {
    return (
        <button
            className="icon-wrapper icon-wrapper-send"
            onClick={handleSendQuestion}
        >
            <Image
                className="icon icon-send mx-auto"
                src={"/send.png"}
                width={329}
                height={262}
                alt="send"
                priority={true}
            />
        </button>
    );
}

export default SendQuestion;
