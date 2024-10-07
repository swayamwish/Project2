const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const message = req.body.message;

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_API_KEY` // Replace YOUR_API_KEY with your actual API key
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: message,
        max_tokens: 150
      })
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return res.status(response.status).send('Error from OpenAI');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
