const express = require('express');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.CHAT_GPT_KEY, 
});

const router = express.Router();

router.post("/getResponse", async (req, res) => {
  try {
    const userInput = req.body.input || 'Say this is a test';

    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userInput }, 
      ],
      max_tokens: 150,
      temperature: 0.7,
    });
    res.status(200).send({ message: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error("Error in OpenAI API call:", error);
    res.status(500).send({ error: "Failed to get response from OpenAI" });
  }
});

module.exports = router;
