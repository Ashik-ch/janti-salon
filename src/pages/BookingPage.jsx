import React from 'react';
import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-950 text-white"
    >
      {/* Hero Section for Booking */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20965.jpg?uid=R209241097&ga=GA1.1.136895706.1708360816&semt=ais_incoming&w=740&q=80)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 drop-shadow-lg"
            style={{ textShadow: '0 0 15px rgba(50, 158, 166, 0.8)' }}
          >
            Schedule Your Luxury Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Book your exclusive appointment today and indulge in unparalleled beauty and wellness services.
          </p>
        </motion.div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-md">
          Your Journey to Radiance Starts Here
        </h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          Fill out the form below to select your desired services, date, and time. Our team will confirm your appointment shortly.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700"
        >
          <BookingForm />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default BookingPage;
