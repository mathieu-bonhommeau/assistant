import React, { useCallback, useEffect, useState } from "react";

export function useAssistant() {
    const [datas, setDatas] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchResponse = useCallback((question) => {
        const ask = () => {
            // use puppeteer to bypass cloudflare (headful because of captchas)

            fetch("https://api.openai.com/v1/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + process.env.NEXT_PUBLIC_OPENAI_PASSWORD,
                },
                body: JSON.stringify({
                    prompt: question,
                    model: "text-davinci-003",
                    max_tokens: 2000,
                }),
            })
                .then((res) => res.json())
                .then((json) => setDatas(json))
                .catch((err) => console.log(err));
        };
        ask();
    }, []);

    return { fetchResponse, response: datas, setResponse: setDatas };
}
