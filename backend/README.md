# Skyn Health Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```
2. Copy `.env` and set your environment variables.
3. Run in development:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Endpoints
- `GET /api/health` — Health check
- `POST /api/contact` — Contact form
- `POST /api/newsletter` — Newsletter signup

## Environment Variables
- `PORT` — Port to run the server
- `FRONTEND_URL` — Allowed CORS origin 