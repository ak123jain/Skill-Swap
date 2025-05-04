import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Outer glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 rounded-full blur-lg transition-opacity duration-500 ${isHovered ? 'opacity-70' : 'opacity-40'}`}></div>

        {/* Button wrapper with animated border */}
        <div className="relative p-[2px] rounded-full overflow-hidden bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600">
          {/* Actual button */}
          <button className="relative flex items-center justify-center gap-3 px-10 py-4 bg-[#111111] rounded-full z-10 group transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-600/20">
            {/* Glow layer inside */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/10 via-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Heart Icon */}
            <div className="relative z-10">
              <Heart 
                size={isHovered ? 22 : 20} 
                fill={isHovered ? "#fff" : "none"} 
                className={`text-white transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`} 
              />
              {isHovered && (
                <div className="absolute -inset-1 bg-pink-500/30 rounded-full blur-sm animate-pulse"></div>
              )}
            </div>

            {/* Button Text */}
            <span className="text-lg sm:text-xl font-semibold text-white z-10">Match Profile</span>

            {/* Particle Effects */}
            {isHovered && (
              <>
                <span className="absolute -top-2 -right-1 h-2 w-2 rounded-full bg-pink-500 animate-ping z-0"></span>
                <span className="absolute bottom-0 left-12 h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping delay-100 z-0"></span>
                <span className="absolute top-2 left-6 h-1 w-1 rounded-full bg-orange-400 animate-ping delay-200 z-0"></span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
