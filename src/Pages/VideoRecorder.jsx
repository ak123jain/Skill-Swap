import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const VideoRecorder = () => {
  const [videoBlob, setVideoBlob] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false); // New state for upload success
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
      setUploadSuccess(false); // Reset success state when starting a new recording
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
      setIsUploading(true);
      setUploadSuccess(false); // Reset success state before new upload
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/record/recordvideo/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Upload success:', response.data);
      setUploadSuccess(true); // Set success to true after successful upload
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadSuccess(false);
    } finally {
      setIsUploading(false);
    }
  };

  const reset = () => {
    setVideoBlob(null);
    setVideoURL(null);
    setUploadSuccess(false); // Reset success state
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
            {uploadSuccess ? (
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Upload Successful!</span>
              </div>
            ) : (
              <button
                onClick={uploadVideo}
                disabled={isUploading}
                className={`${
                  isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                } text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg`}
              >
                {isUploading ? 'Uploading...' : 'Upload'}
              </button>
            )}
            <button
              onClick={reset}
              disabled={isUploading}
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