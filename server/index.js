require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

app.get('/auth/login', (_req, res) => {
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    scope: 'read:user repo',
  });
  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

app.get('/auth/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send('Missing code');

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ error: data.error_description });
    }

    res.redirect(`http://localhost:4200/auth/callback?token=${data.access_token}`);
  } catch (err) {
    console.error('Token exchange failed:', err);
    res.status(500).send('Authentication failed');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Auth server running on http://localhost:${PORT}`));
