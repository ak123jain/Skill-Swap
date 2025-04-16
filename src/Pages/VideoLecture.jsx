import axios from 'axios';
import React, { useEffect, useState } from 'react';

const VideoLecture = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {

    const token = localStorage.getItem("accessToken")
    try {
      const response = await axios.get('http://localhost:8000/record/getvideo' , {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
      );
      console.log('Fetched videos: 🙌🙌🙌🙌', response.data.data.video);
      setVideos(response.data.data.video); // assuming response.data is an array of URLs or video objects
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 to-pink-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">📚 Uploaded Video Lectures</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <video
                src={`${video.videoUrl}`} // update according to your backend path
                controls
                className="w-full rounded-lg"
              />
              <p className="mt-2 text-center text-sm text-gray-600">Lecture {index + 1}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No videos uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default VideoLecture;
