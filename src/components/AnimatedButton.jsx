import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className, type = "button" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(50, 158, 166, 0.8)", transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`relative px-8 py-3 rounded-full bg-gradient-to-r from-primary to-blue-400 text-white font-semibold text-lg overflow-hidden
        hover:from-blue-400 hover:to-primary transform hover:-translate-y-1 transition-all duration-500 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900
        shadow-lg hover:shadow-primary-glow
        ${className}`}
      style={{
        boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.2)",
        '--primary-glow': '0 0 20px rgba(50, 158, 166, 0.7)'
      }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
