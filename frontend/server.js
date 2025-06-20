const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Serve index.html for GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Submit form POST
app.post('/submit', async (req, res) => {
  const { severity, message } = req.body;
  try {
    await axios.post('http://backend/log', { severity, message }); // Kubernetes DNS
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error submitting log');
  }
});

// Proxy GET logs from backend
app.get('/logs', async (req, res) => {
  try {
    const response = await axios.get('http://backend/logs');
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching logs');
  }
});

app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));
