// index.js

const express = require('express');
const bodyParser = require('body-parser'); // Add this line to parse JSON in the request body
const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js API!');
});

// Add a new route to handle POST requests with a message
app.post('/sendMessage', (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  res.json({ receivedMessage: message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
