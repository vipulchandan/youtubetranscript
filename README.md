# YouTube Video Transcript Viewer

YouTube Video Transcript Viewer is a web application that allows users to enter a YouTube video URL and view its transcript (Transcript) if available. The project consists of a backend built with Node.js, Express, and MongoDB to fetch and store video transcripts, and a frontend built with React and Vite to interact with users and display videos with their transcripts.

## Features

- Enter a YouTube video URL to fetch and display the video's transcript (Transcript).
- Save video details (URL, title, transcript) to the database for future reference.
- Display a loading message while fetching the video and transcript.
- Handle cases where the transcript is not available and show appropriate error messages.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (installed and running)
- YouTube Data API Key

## Setup

1. Clone the repository:

```
git clone https://github.com/vipulchandan/youtubetranscript.git
```

2. Install dependencies for both backend and frontend:

```
cd youtubetranscript
cd server
npm install

cd ../client
npm install
```

3. Configure the backend:

   - Set your YouTube Data API key in the `YOUTUBE_API_KEY` field in the `.env` file.
   - Set your MongoDB URI in the `MONGO_URI` field in the `.env` file.

4. Run the backend and frontend:

```
# In the 'server' directory, start the backend server
npm start

# In the 'client' directory, start the frontend development server
npm run dev
```

5. Access the application in your browser at `http://localhost:3000`.

## How to Use

1. Enter a valid YouTube video URL in the input field and click the "Submit" button.
2. The video player will load and display the video, and the transcript (Transcript) will appear below it if available.
3. If the transcript is not available, an appropriate message will be displayed.
4. The application will save video details (URL, title, transcript) in the database, allowing you to view the transcript for previously fetched videos without re-fetching.
