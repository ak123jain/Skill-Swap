 


// import React, { useState } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import clsx from 'clsx'

// const Button = ({
//   children,
//   variant = 'solid',
//   size = 'md',
//   className = '',
//   ...props
// }) => {
//   const base = 'rounded-2xl transition-all duration-200 font-medium';

//   const variants = {
//     solid: 'bg-blue-600 text-white hover:bg-blue-700',
//     ghost: 'bg-transparent hover:bg-white/10 text-white',
//     outline: 'border border-white text-white hover:bg-white/10',
//   };

//   const sizes = {
//     sm: 'text-sm px-3 py-1.5',
//     md: 'text-base px-4 py-2',
//   };

//   return (
//     <button
//       className={clsx(base, variants[variant], sizes[size], className)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// const fadeUpScroll = {
//   hidden: { opacity: 0, y: 50 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
//   },
// };

// const Hero2 = () => {
//   const { scrollY } = useScroll();
//   const blurBg = useTransform(scrollY, [0, 800], ['0px', '2px']);
//   const opacityOverlay = useTransform(scrollY, [0, 800], [0.2, 0.3]);

//   const [inputText, setInputText] = useState('');

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.5, ease: 'easeOut' }}
//     >
//       <motion.div
//         style={{ filter: blurBg }}
//         className="w-full min-h-screen bg-black text-white px-4 md:px-6 py-4 transition-all duration-700 ease-in-out relative overflow-hidden"
//       >
//         {/* Overlay Background */}
//         <motion.div
//           style={{ opacity: opacityOverlay }}
//           className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none z-0"
//         />

//         {/* Navigation */}
//         <nav className="relative z-10 flex justify-between items-center mb-8 max-w-7xl mx-auto">
//           <h1 className="text-xl font-bold">SkillSwap</h1>
//           <div className="space-x-4">
//             <Button variant="ghost">Explore</Button>
//             <Button variant="ghost">Join</Button>
//             <Button variant="ghost">Contact</Button>
//             <Button variant="ghost">Login</Button>
//           </div>
//         </nav>

//         {/* 3-Grid Layout */}
//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-7xl mx-auto">
//           {/* Top Left - SkillSwap Intro + Input */}
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             variants={fadeUpScroll}
//             viewport={{ once: true, amount: 0.5 }}
//             className="bg-neutral-900 p-6 rounded-2xl shadow-xl"
//           >
//             <h2 className="text-2xl font-semibold mb-2">What is SkillSwap?</h2>
//             <p className="text-sm text-gray-300 mb-4">
//               A peer-to-peer platform where people exchange skills instead of money. Learn from others, share what you know, and grow together.
//             </p>
//             <input
//               type="text"
//               placeholder="Type something..."
//               className="w-full p-2 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//             />
//           </motion.div>

//           {/* Top Right - Display Input Text */}
//           <div className="relative bg-neutral-800 rounded-2xl overflow-hidden shadow-xl h-full flex items-center justify-center text-white text-lg p-4">
//             {inputText ? inputText : (
//               <div className="text-sm text-gray-400 text-center">
//                 Real people. Real skills. Real swaps.
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Bottom Full-Width - 3D Skill Wall */}
//         <motion.div
//           variants={fadeUpScroll}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="relative z-10 bg-neutral-900 rounded-2xl p-6 shadow-2xl max-w-7xl mx-auto"
//         >
//           <h3 className="text-xl font-medium mb-4">Featured Skills Wall</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[...Array(8)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUpScroll}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.3 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-neutral-800 p-4 rounded-xl shadow hover:shadow-lg text-center"
//               >
//                 <p>Skill #{i + 1}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Footer Controls */}
//         <motion.footer
//           variants={fadeUpScroll}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.4 }}
//           className="relative z-10 flex justify-between items-center mt-10 text-sm text-gray-400 max-w-7xl mx-auto"
//         >
//           <div className="space-x-2">
//             <Button size="sm" variant="ghost">Theme</Button>
//             <Button size="sm" variant="ghost">Language</Button>
//           </div>
//           <Button size="sm" variant="outline" className="text-yellow-400 border-yellow-400">
//             Vote for Features
//           </Button>
//         </motion.footer>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Hero2;

import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import clsx from 'clsx'

const Button = ({
  children,
  variant = 'solid',
  size = 'md',
  className = '',
  ...props
}) => {
  const base = 'rounded-2xl transition-all duration-200 font-medium';

  const variants = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent hover:bg-white/10 text-white',
    outline: 'border border-white text-white hover:bg-white/10',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

const fadeUpScroll = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Hero2 = () => {
  const { scrollY } = useScroll();
  const blurBg = useTransform(scrollY, [0, 800], ['0px', '2px']);
  const opacityOverlay = useTransform(scrollY, [0, 800], [0.2, 0.3]);

  const [inputText, setInputText] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <motion.div
        style={{ filter: blurBg }}
        className="w-full min-h-screen bg-black text-white px-4 md:px-6 py-4 transition-all duration-700 ease-in-out relative overflow-hidden"
      >
        {/* Overlay Background */}
        <motion.div
          style={{ opacity: opacityOverlay }}
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none z-0"
        />

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center mb-8 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">SkillSwap</h1>
          <div className="space-x-4">
            <Button variant="ghost">Explore</Button>
            <Button variant="ghost">Join</Button>
            <Button variant="ghost">Contact</Button>
            <Button variant="ghost">Login</Button>
          </div>
        </nav>

        {/* 3-Grid Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-7xl mx-auto">
          {/* Top Left - SkillSwap Intro + Input */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUpScroll}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-neutral-900 p-8 rounded-2xl shadow-xl min-h-[300px]"
          >
            <h2 className="text-2xl font-semibold mb-2">What is SkillSwap?</h2>
            <p className="text-sm text-gray-300 mb-4">
              A peer-to-peer platform where people exchange skills instead of money. Learn from others, share what you know, and grow together.
            </p>
            <input
              type="text"
              placeholder="Type something..."
              className="w-full p-2 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </motion.div>

          {/* Top Right - Display Input Text */}
          <div className="relative bg-neutral-800 rounded-2xl overflow-hidden shadow-xl min-h-[300px] flex items-center justify-center text-white text-lg p-4">
            {inputText ? (
              <div className="text-white font-bold text-lg text-center break-words max-w-full">
                {inputText}
              </div>
            ) : (
              <div className="text-sm text-gray-400 text-center">
                Real people. Real skills. Real swaps.
              </div>
            )}
          </div>
        </div>

        {/* Bottom Full-Width - 3D Skill Wall */}
        <motion.div
          variants={fadeUpScroll}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 bg-neutral-900 rounded-2xl p-6 shadow-2xl max-w-7xl mx-auto"
        >
          <h3 className="text-xl font-medium mb-4">Featured Skills Wall</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                variants={fadeUpScroll}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-800 p-4 rounded-xl shadow hover:shadow-lg text-center"
              >
                <p>Skill #{i + 1}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Controls */}
        <motion.footer
          variants={fadeUpScroll}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 flex justify-between items-center mt-10 text-sm text-gray-400 max-w-7xl mx-auto"
        >
          <div className="space-x-2">
            <Button size="sm" variant="ghost">Theme</Button>
            <Button size="sm" variant="ghost">Language</Button>
          </div>
          <Button size="sm" variant="outline" className="text-yellow-400 border-yellow-400">
            Vote for Features
          </Button>
        </motion.footer>
      </motion.div>
    </motion.div>
  );
};

export default Hero2;