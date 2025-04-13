// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className="relative z-40 min-h-screen w-full bg-white text-black flex items-center justify-center px-6 sm:px-10 lg:px-20">
//       {/* Glassy Background Shapes */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 transform -translate-x-1/2 -rotate-6" />
//         <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-white/10 backdrop-blur-md rounded-full shadow-xl border border-white/10 rotate-12" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="text-center w-full max-w-5xl"
//       >
//         {/* Tagline */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.4 }}
//           className="text-xs tracking-widest uppercase mb-2 text-gray-500"
//         >
//           @SKILLSWAP PEER SKILL PLATFORM
//         </motion.p>

//         {/* Main Logo Style Title */}
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="text-6xl sm:text-8xl font-black tracking-tight"
//         >
//           SKILLSWAP
//         </motion.h1>

//         {/* Sub Navigation Text */}
//         <div className="mt-6 text-xs tracking-wide text-gray-700 uppercase flex justify-center flex-wrap gap-3">
//           <span>Learn</span>
//           <span>Teach</span>
//           <span>Share</span>
//           <span>Peer-to-Peer</span>
//           <span>Upskilling</span>
//           <span>Remote</span>
//         </div>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="mt-10 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
//         >
//           Creative peer learning, modern UI, and a growing community of learners. Swap your skills and grow smarter — together.
//         </motion.p>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 0.5 }}
//           className="mt-8 flex justify-center gap-4 flex-wrap"
//         >
//           <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition">
//             Get Started
//           </button>
//           <button className="px-6 py-2 border border-black text-black rounded-full text-sm hover:bg-black hover:text-white transition">
//             Learn More
//           </button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative z-40 min-h-screen w-full bg-white text-gray-900 flex items-center justify-center px-6 sm:px-10 lg:px-20">
      {/* Glassy Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-pink-500/10 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-300/20 transform -translate-x-1/2 -rotate-6" />
        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-pink-500/10 backdrop-blur-md rounded-full shadow-xl border border-pink-300/10 rotate-12" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center w-full max-w-5xl"
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-xs tracking-widest uppercase mb-2 text-pink-500"
        >
          @SKILLSWAP PEER SKILL PLATFORM
        </motion.p>

        {/* Main Logo Style Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-6xl sm:text-8xl font-black tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
        >
          SKILLSWAP
        </motion.h1>

        {/* Sub Navigation Text */}
        <div className="mt-6 text-xs tracking-wide text-gray-600 uppercase flex justify-center flex-wrap gap-3">
          <span>Learn</span>
          <span>Teach</span>
          <span>Share</span>
          <span>Peer-to-Peer</span>
          <span>Upskilling</span>
          <span>Remote</span>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
        >
          Creative peer learning, modern UI, and a growing community of learners. Swap your skills and grow smarter — together.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:brightness-110 transition">
            Get Started
          </button>
          <button className="px-6 py-2 border border-pink-500 text-pink-500 rounded-full text-sm hover:bg-pink-500 hover:text-white transition">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;