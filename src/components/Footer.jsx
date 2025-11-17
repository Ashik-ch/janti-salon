import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white mt-12 py-12 shadow-inner"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Janti Salon Info */}
        <div className="space-y-4">
          <Link to="/" className="text-3xl font-extrabold text-primary tracking-widest uppercase hover:text-white transition duration-300">
            Janti Salon
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mt-2">
            Experience unparalleled luxury and innovative beauty services. Your journey to radiant elegance begins here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary transition duration-300">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary transition duration-300">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary transition duration-300">About</Link></li>
            <li><Link to="/booking" className="hover:text-primary transition duration-300">Booking</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li><p className="text-gray-300">123 Salon Street, Beauty City, BC 12345</p></li>
            <li><a href="tel:+1234567890" className="hover:text-primary transition duration-300">+1 (234) 567-890</a></li>
            <li><a href="mailto:info@jantisalon.com" className="hover:text-primary transition duration-300">info@jantisalon.com</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Janti Salon. All rights reserved.</p>
        <p className="mt-1">Designed with luxury and future in mind.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
