import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-black text-white relative px-6 py-16 md:px-24 overflow-hidden shadow-2xl"
    >
      {/* Sexy dual-tone glowing border */}
      <div className="absolute top-0 left-0 w-full h-3 z-20">
  <div className="w-full h-full rounded-full bg-gradient-to-r from-white via-pink-400 to-white opacity-90 animate-pulse"
    style={{
      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 12px rgba(255, 105, 180, 0.8))'
    }}
  />
</div>



      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* About */}
        <div>
          <h2 className="text-3xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">
            SkillSwap
          </h2>
          <p className="text-gray-300 leading-relaxed text-md">
            Where passion meets learning. Exchange skills, grow together, and create a ripple of shared wisdom.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 border-l-4 pl-3 border-pink-400 text-white">
            Explore
          </h3>
          <ul className="space-y-3 text-gray-300">
            {['Home', 'Browse Skills', 'Become a Mentor', 'Contact'].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-pink-400 hover:tracking-wider transition-all duration-300 block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-5 border-l-4 pl-3 border-pink-400 text-white">
            Connect
          </h3>
          <div className="flex gap-6">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-white transition-all hover:scale-110 duration-300"
              >
                <Icon size={24} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-16 pt-6 border-t border-gray-800 text-center text-sm text-gray-500 relative z-10">
        &copy; {new Date().getFullYear()}{' '}
        <span className="text-pink-400 font-medium">SkillSwap</span>. Built with brilliance & boldness.
      </div>
    </motion.footer>
  )
}

export default Footer
