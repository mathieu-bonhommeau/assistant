import React, { useCallback, useEffect, useState } from "react";

export function useAssistant() {
    const [datas, setDatas] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isInit, setIsInit] = useState(true);
    const [error, setError] = useState(null);

    const fetchResponse = useCallback((question) => {
        const ask = () => {
            // use puppeteer to bypass cloudflare (headful because of captchas)
            setIsInit(false);
            setIsLoading(true);
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
                .then((json) => {
                    setDatas(cleanDatas(json?.choices[0]?.text));
                    setIsLoading(false);
                })
                .catch((err) => setError(err));
        };
        ask();
    }, []);

    return {
        fetchResponse,
        response: datas,
        setResponse: setDatas,
        error,
        isLoading,
        isInit,
    };
}

const cleanDatas = (datas) => {
    datas.substring(0, datas.search(/[A-Za-z0-9]/g)).trim();
    return datas;
};
