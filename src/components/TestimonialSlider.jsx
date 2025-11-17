import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Fatima Al-Hamad",
    location: "Doha, Qatar",
    quote: "Janti Salon offers an unparalleled luxury experience. The staff are incredibly skilled, and the ambiance is simply divine.",
    avatar: "https://via.placeholder.com/100x100?text=F.A" // Placeholder image
  },
  {
    id: 2,
    name: "Aisha Khan",
    location: "Al Wakrah, Qatar",
    quote: "My go-to place for all beauty needs. Their hair treatments are revolutionary, and the results are always stunning.",
    avatar: "https://via.placeholder.com/100x100?text=A.K" // Placeholder image
  },
  {
    id: 3,
    name: "Noura Al-Mansoori",
    location: "Al Rayyan, Qatar",
    quote: "A truly futuristic salon experience! From the booking process to the actual service, everything is seamless and luxurious.",
    avatar: "https://via.placeholder.com/100x100?text=N.M" // Placeholder image
  },
  {
    id: 4,
    name: "Hamad Al-Mulla",
    location: "Lusail, Qatar",
    quote: "The spa services are out of this world! I always leave feeling completely refreshed and rejuvenated. Highly recommend Janti Salon.",
    avatar: "https://via.placeholder.com/100x100?text=H.A" // Placeholder image
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-primary border-opacity-40 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent opacity-5 animate-pulse-slow"></div>
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-primary shadow-lg"
          />
          <p className="text-gray-200 text-xl italic mb-6 relative z-10 leading-relaxed">
            "{testimonials[currentIndex].quote}"
          </p>
          <h4 className="text-primary font-bold text-2xl relative z-10">{testimonials[currentIndex].name}</h4>
          <p className="text-gray-400 text-md relative z-10">{testimonials[currentIndex].location}</p>
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={handlePrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary bg-opacity-70 p-4 rounded-full text-white text-2xl 
                   hover:bg-opacity-100 transition-all duration-300 shadow-lg focus:outline-none z-20 md:-left-8"
      >
        &larr;
      </motion.button>
      <motion.button
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary bg-opacity-70 p-4 rounded-full text-white text-2xl 
                   hover:bg-opacity-100 transition-all duration-300 shadow-lg focus:outline-none z-20 md:-right-8"
      >
        &rarr;
      </motion.button>
    </div>
  );
};

export default TestimonialSlider;
