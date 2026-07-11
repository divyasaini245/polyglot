# Polyglot

**Powering Multilingual Intelligence**

Polyglot is a full-stack MERN application that turns any YouTube video into an instant, translated summary. Paste a link, choose your language from 70+ supported options, and get a clean, AI-generated summary in seconds — no more sitting through long videos or struggling with content in a language you don't understand.

## Live Demo

🔗 [Live Link](#) — 

## Features

- **YouTube Transcript Extraction** — Automatically fetches captions/subtitles from any YouTube video
- **AI-Powered Summarization** — Uses Google's Gemini API to generate clear, concise summaries
- **70+ Language Support** — Get summaries translated into almost any major language
- **User Authentication** — Secure signup/login with JWT-based authentication
- **History Tracking** — Every processed video is saved to your account for future reference
- **Dark/Light Theme Toggle** — Switch between dark and light mode
- **Responsive Design** — Works seamlessly across desktop, tablet, and mobile
- **Protected Routes** — Dashboard and History pages are only accessible to logged-in users

## Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- bcrypt.js for password hashing

**AI / Third-Party Services**
- Google Gemini API (gemini-2.5-flash) — for summarization and translation
- `youtube-transcript` — for extracting video captions

## Architecture

```
Client (React)
    ↓ HTTP requests
Routes (Express)
    ↓
Controllers (business logic)
    ↓
Services (YouTube transcript + Gemini AI)
    ↓
MongoDB (users + history)
```

The backend follows a clean separation of concerns:
- **Routes** — define API endpoints
- **Controllers** — handle request/response logic
- **Services** — contain reusable logic (transcript fetching, AI calls)
- **Models** — Mongoose schemas for Users and History
- **Middleware** — JWT authentication guard for protected routes

## Project Structure

```
Polyglot/
├── client/                 # React frontend
│   └── src/
│       ├── assets/         # Images, logo
│       ├── components/     # Navbar, ProtectedRoute, etc.
│       ├── context/        # Theme context
│       ├── data/           # Languages list
│       ├── pages/          # Landing, Auth, Dashboard, History
│       └── services/       # Axios API instance
│
└── server/                 # Node/Express backend
    ├── config/             # MongoDB connection
    ├── controllers/        # Route logic
    ├── middleware/         # Auth middleware
    ├── models/             # User, History schemas
    ├── routes/             # API routes
    └── services/           # YouTube + Gemini integration
```

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| POST | `/api/auth/signup` | Register a new user | No |
| POST | `/api/auth/login` | Login and receive JWT | No |
| POST | `/api/transcript/process` | Process a YouTube video (transcript + summary) | Yes |
| GET | `/api/history` | Get logged-in user's history | Yes |
| POST | `/api/history` | Save a history entry | Yes |

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/Ankitsin05/polyglot.git
cd polyglot
```

2. Setup the backend
```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Run the backend:
```bash
nodemon server.js
```

3. Setup the frontend
```bash
cd ../client
npm install
npm run dev
```

The app will be running at `http://localhost:5173`, with the backend on `http://localhost:5000`.



## Future Improvements

- Support for videos without existing captions (via Whisper-based audio transcription)
- Downloadable summaries (PDF/text export)
- User profile page
- Video title fetching for cleaner history display

## Author

**Ankit Sinha**
- GitHub: [github.com/Ankitsin05](https://github.com/Ankitsin05)
- LinkedIn: [linkedin.com/in/ankit-sinha-07406531a](https://linkedin.com/in/ankit-sinha-07406531a)
- Email: aaiankitsinha@gmail.com

## License

This project is open source and available for educational purposes.