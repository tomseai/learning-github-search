# DevFinder

Angular 21 app for searching GitHub users and viewing your own repositories via GitHub OAuth login.

## Prerequisites

- Node.js 18+
- A [GitHub OAuth App](https://github.com/settings/developers) with callback URL `http://localhost:3000/auth/callback`

## Setup

1. Create a GitHub OAuth App:
   - Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
   - **Application name:** DevFinder (or anything you like)
   - **Homepage URL:** `http://localhost:4200`
   - **Authorization callback URL:** `http://localhost:3000/auth/callback`
   - Click **Register application**
   - Copy the **Client ID**
   - Click **Generate a new client secret** and copy it

2. Install dependencies:

```bash
npm install
cd server && npm install
```

3. Configure GitHub OAuth credentials in `server/.env`:

```
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

## Running

Start both the auth server and the Angular dev server:

```bash
# Terminal 1 — Auth server (port 3000)
cd server && node index.js

# Terminal 2 — Angular dev server (port 4200)
npm start
```

Open `http://localhost:4200/`.

## Features

- Search any GitHub user by username
- Sign in with GitHub (OAuth)
- Protected dashboard showing your top 10 public repos
- Dark mode toggle
- Responsive design

## Build

```bash
npm run build
```

## Tests

```bash
npm test
```
