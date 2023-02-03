const axios = require('axios');

const endpoint = 'https://api.openai.com/v1/engines/davinci/jobs';
const model = 'davinci';
const apiKey = process.env.CHATGPT_KEY;

const chatGPT = async (text) => {
  try {
    const response = await axios.post(endpoint, {
      prompt: text,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { chatGPT };