 


// import React, { useState, useEffect } from 'react';
// import { Menu, X, User, LogOut, Sparkles, LogIn, UserPlus } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const navLinks = ['Home', 'About', 'Services', 'Contact'];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     const handleSectionScroll = () => {
//       const sections = navLinks.map(link => link.toLowerCase());
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const height = element.offsetHeight;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('scroll', handleSectionScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('scroll', handleSectionScroll);
//     };
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   useEffect(() => {
//     if (!showDropdown) return;
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.user-dropdown-container')) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [showDropdown]);

//   return (
//     <header 
//       className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 text-white rounded-2xl shadow-lg ${
//         scrolled ? 'bg-gray-900/95 backdrop-blur-md py-2' : 'bg-gray-900/80 py-4'
//       }`}
//     >
//       <div className="px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.div 
//             className="flex items-center space-x-2 text-2xl font-bold"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
//               <Sparkles size={28} className="text-pink-500" />
//             </motion.div>
//             <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
//               ✨ SkillSwap
//             </span>
//           </motion.div>

//           {/* Desktop nav */}
//           <nav className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <motion.a
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 className={`relative text-base font-medium transition-all duration-300 hover:text-pink-400 ${
//                   activeSection === link.toLowerCase() ? 'text-pink-400' : 'text-white'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.1 * navLinks.indexOf(link) }}
//               >
//                 {link}
//                 {activeSection === link.toLowerCase() && (
//                   <motion.span
//                     className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500"
//                     layoutId="activeUnderline"
//                     initial={{ width: 0 }}
//                     animate={{ width: '100%' }}
//                     transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </motion.a>
//             ))}
//           </nav>

//           {/* Buttons */}
//           <div className="flex items-center space-x-4">
//             <motion.button
//               className="hidden md:flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-pink-500/30 transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Start Swapping
//             </motion.button>

//             {/* User dropdown */}
//             <div className="relative hidden md:block user-dropdown-container">
//               <motion.button
//                 className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-md hover:shadow-pink-500/30 transition-all"
//                 onClick={toggleDropdown}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 <User size={20} className="text-white" />
//               </motion.button>
//               <AnimatePresence>
//                 {showDropdown && (
//                   <motion.div 
//                     className="absolute right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md shadow-xl rounded-xl py-2 border border-white/10"
//                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {[
//                       { label: 'Profile', icon: <User size={16} className="mr-2 text-pink-400" />, to: '/profile' },
//                       { label: 'Login', icon: <LogIn size={16} className="mr-2 text-green-400" />, to: '/login' },
//                       { label: 'Register', icon: <UserPlus size={16} className="mr-2 text-yellow-400" />, to: '/register' },
//                       { label: 'Logout', icon: <LogOut size={16} className="mr-2 text-cyan-400" />, to: '/logout' },
//                     ].map((item, index) => (
//                       <motion.div
//                         key={item.label}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                         whileHover={{ x: 5 }}
//                       >
//                         <Link
//                           to={item.to}
//                           className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700/50 transition-all"
//                         >
//                           {item.icon}
//                           {item.label}
//                         </Link>
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Mobile menu toggle */}
//             <motion.button
//               className="md:hidden p-2 rounded-md bg-gray-800/80 hover:bg-pink-800/80 transition-all"
//               onClick={toggleMenu}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={isOpen ? 'close' : 'menu'}
//                   initial={{ opacity: 0, rotate: -90 }}
//                   animate={{ opacity: 1, rotate: 0 }}
//                   exit={{ opacity: 0, rotate: 90 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {isOpen ? <X size={24} /> : <Menu size={24} />}
//                 </motion.div>
//               </AnimatePresence>
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav Dropdown */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.nav
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="md:hidden px-4 py-4 bg-gray-900/95 backdrop-blur-lg shadow-xl border-t border-white/10 rounded-b-2xl"
//           >
//             {navLinks.map((link, index) => (
//               <motion.a
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 className={`block py-3 text-lg font-medium border-b border-gray-800 ${
//                   activeSection === link.toLowerCase() ? 'text-pink-400' : 'text-white'
//                 } hover:text-pink-400 transition-all`}
//                 onClick={() => setIsOpen(false)}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ x: 5 }}
//               >
//                 {link}
//               </motion.a>
//             ))}
//             <motion.button
//               className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium text-base hover:shadow-lg hover:shadow-pink-500/30 transition-all"
//               onClick={() => setIsOpen(false)}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: navLinks.length * 0.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Start Swapping
//             </motion.button>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogOut, Sparkles, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = ['Home', 'About', 'Services', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleSectionScroll = () => {
      const sections = navLinks.map(link => link.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    if (!showDropdown) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-dropdown-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showDropdown]);

  return (
    <header 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 text-white rounded-2xl shadow-lg ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md py-2' : 'bg-gray-900/80 py-4'
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <Sparkles size={28} className="text-pink-500" />
            </motion.div>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
              ✨ SkillSwap
            </span>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`relative text-base font-medium transition-all duration-300 hover:text-pink-400 ${
                  activeSection === link.toLowerCase() ? 'text-pink-400' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * navLinks.indexOf(link) }}
              >
                {link}
                {activeSection === link.toLowerCase() && (
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500"
                    layoutId="activeUnderline"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <motion.button
              className="hidden md:flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-pink-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Start Swapping
            </motion.button>

            {/* User dropdown */}
            <div className="relative hidden md:block user-dropdown-container">
              <motion.button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-md hover:shadow-pink-500/30 transition-all"
                onClick={toggleDropdown}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <User size={20} className="text-white" />
              </motion.button>
              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md shadow-xl rounded-xl py-2 border border-white/10"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {[
                      { label: 'Profile', icon: <User size={16} className="mr-2 text-pink-400" />, to: '/profile' },
                      { label: 'Login', icon: <LogIn size={16} className="mr-2 text-green-400" />, to: '/login' },
                      { label: 'Register', icon: <UserPlus size={16} className="mr-2 text-yellow-400" />, to: '/register' },
                      { label: 'Logout', icon: <LogOut size={16} className="mr-2 text-cyan-400" />, to: '/logout' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <Link
                          to={item.to}
                          className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700/50 transition-all"
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu toggle */}
            <motion.button
              className="md:hidden p-2 rounded-md bg-gray-800/80 hover:bg-pink-800/80 transition-all"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
