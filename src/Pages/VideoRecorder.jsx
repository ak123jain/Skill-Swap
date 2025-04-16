 import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const VideoRecorder = () => {
  const [videoBlob, setVideoBlob] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState(null);

  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const { id } = useParams();

  const startRecording = async () => {
    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(streamData);
      videoRef.current.srcObject = streamData;
      videoRef.current.play();

      const chunks = [];
      const mediaRecorder = new MediaRecorder(streamData);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        setVideoBlob(blob);
        setVideoURL(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      alert('Please allow camera and microphone access.');
      console.error('Error accessing media devices.', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsRecording(false);
  };

  const uploadVideo = async () => {
    if (!videoBlob) return;

    const formData = new FormData();
    formData.append('video', videoBlob, 'recording.mp4');
    const token = localStorage.getItem('accessToken');

    try {
      const response = await axios.post(`http://localhost:8000/record/recordvideo/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Upload success:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const reset = () => {
    setVideoBlob(null);
    setVideoURL(null);
    if (videoRef.current) videoRef.current.srcObject = null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-pink-300 flex items-center justify-center">
      <div className="max-w-xl w-full p-8 bg-white bg-opacity-80 backdrop-blur-md shadow-2xl rounded-3xl text-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6">🎥 Record Your Lecture</h1>

        <div className="mb-6">
          <video
            ref={videoRef}
            src={!isRecording && videoURL ? videoURL : undefined}
            autoPlay={isRecording}
            muted={isRecording}
            controls={!isRecording && !!videoURL}
            className="w-full rounded-xl shadow-lg border-2 border-purple-300"
          />
        </div>

        {!isRecording && !videoBlob && (
          <button
            onClick={startRecording}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Start Recording
          </button>
        )}

        {isRecording && (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition shadow-lg"
          >
            Stop Recording
          </button>
        )}

        {!isRecording && videoBlob && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              onClick={uploadVideo}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Upload
            </button>
            <button
              onClick={reset}
              className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition shadow-lg"
            >
              Record Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
