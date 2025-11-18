import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 z-50 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-xl"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link to="/" className="text-3xl font-extrabold text-primary tracking-widest uppercase hover:text-white transition duration-300">
          Janti Salon
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="text-white text-md font-light hover:text-primary transition duration-300">Home</Link></li>
          <li><Link to="/services" className="text-white text-md font-light hover:text-primary transition duration-300">Services</Link></li>
          <li><Link to="/about" className="text-white text-md font-light hover:text-primary transition duration-300">About</Link></li>
          <li><Link to="/booking" className="text-white text-md font-light hover:text-primary transition duration-300">Booking</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8"
        >
          <li><Link to="/" className="text-white text-2xl font-medium hover:text-primary transition duration-300" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/services" className="text-white text-2xl font-medium hover:text-primary transition duration-300" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/about" className="text-white text-2xl font-medium hover:text-primary transition duration-300" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/booking" className="text-white text-2xl font-medium hover:text-primary transition duration-300" onClick={toggleMenu}>Booking</Link></li>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
