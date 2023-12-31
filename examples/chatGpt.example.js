
import { ChatGPTAPI } from 'chatgpt'
// require ChatGPTAPI from

(async function openAI() {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY || "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"
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
})()