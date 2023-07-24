import React, { useState } from 'react';
import axios from 'axios';

const VideoForm = ({ setVideoData }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add the loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!inputUrl.trim()) {
      setError('Please enter a YouTube video URL.');
      return;
    }
    
    const urlRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([^&]+).*/;
    if (!urlRegex.test(inputUrl)) {
      setError('Please enter a valid YouTube video URL.');
      return;
    }
    
    setIsLoading(true); // Set loading state to true

    try {
      const response = await axios.post('http://localhost:5000/api/transcript', {
        videoUrl: inputUrl,
      });

      const { videoUrl, transcript } = response.data;

      if (transcript === null) {
        setVideoData({
          videoUrl,
          transcript: 'Transcript not available for this video.',
        });
      } else {
        setVideoData(response.data);
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred while fetching the transcript.');
    } finally {
      setIsLoading(false); // Set loading state to false after the request is completed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        placeholder="Enter YouTube Video URL"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default VideoForm;
