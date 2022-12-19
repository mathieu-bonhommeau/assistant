import Image from "next/image";
import React from "react";

function SendQuestion({ handleSendQuestion }) {
    return (
        <button
            className="w-16 h-16 md:hover:scale-125 transition-all"
            onClick={handleSendQuestion}
        >
            <Image
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
