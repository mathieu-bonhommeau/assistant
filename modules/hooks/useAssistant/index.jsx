import React, { useCallback, useEffect, useState } from 'react'

export function useAssistant() {
    const [response, setResponse] = useState(null)

    const fetchResponse = useCallback((question) => {
        console.log("🚀 ~ file: index.jsx:7 ~ fetchResponse ~ question", question)
        
        const ask = () => {
            console.log("🚀 ~ file: index.jsx:10 ~ fetchResponse ~ question", question)
            // use puppeteer to bypass cloudflare (headful because of captchas)

            const openAIAuth = {
              email: process.env.OPENAI_EMAIL,
              password: process.env.OPENAI_PASSWORD
            }
            console.log("🚀 ~ file: index.jsx:17 ~ ask ~ openAIAuth", openAIAuth)
          
			fetch("https://api.openai.com/v1/completions", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + "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"
				},
				body: JSON.stringify({
                    prompt: question,
                    model: "text-davinci-003"
                })
			})
            .then(res => res.json())
            .then(json => setResponse(json))
            .catch(err => console.log(err))
          
            //console.log("🚀 ~ file: index.jsx:14 ~ ask ~ result", result)
          }
          ask()
    }, [])

    return {fetchResponse}
}

