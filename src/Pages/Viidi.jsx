import React from 'react';
import vidi from '../assets/vidi.mp4';

const Viidi = () => {
  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center bg-black px-4 py-8">
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
        <video
          src={vidi}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[70vh] object-cover brightness-75 transition-all duration-500 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Viidi;
