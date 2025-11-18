import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(50, 158, 166, 0.6)", transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 relative group cursor-pointer h-full flex flex-col"
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={img || "https://via.placeholder.com/600x400?text=Service+Image"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300"></div>
      </div>
      <div className="relative p-6 text-center flex-grow flex flex-col justify-between">
        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 leading-relaxed flex-grow">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-primary text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
