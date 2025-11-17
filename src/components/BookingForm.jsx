import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const services = ["Hair Styling", "Makeup Artistry", "Nail Enhancements", "Luxurious Spa", "Hair Treatments", "Facial Treatments"];

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    console.log("Booking Data:", formData);
    // Reset form or navigate to confirmation
  };

  const renderStep = () => {
    const inputClasses = "w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300";
    const labelClasses = "block text-gray-300 text-sm font-medium mb-2";

    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label htmlFor="name" className={labelClasses}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClasses}>Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="(123) 456-7890"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="email" className={labelClasses}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-end mt-4">
              <AnimatedButton onClick={nextStep} className="py-3 px-8 text-lg">Next</AnimatedButton>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label htmlFor="service" className={labelClasses}>Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputClasses} appearance-none pr-8`}
                required
              >
                <option value="">Select a Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className={labelClasses}>Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label htmlFor="time" className={labelClasses}>Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-between mt-4">
              <AnimatedButton onClick={prevStep} className="py-3 px-8 text-lg">Back</AnimatedButton>
              <AnimatedButton type="submit" onClick={handleSubmit} disabled={isSubmitting} className="py-3 px-8 text-lg">
                {isSubmitting ? 'Booking...' : 'Book Now'}
              </AnimatedButton>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-primary border-opacity-40 max-w-2xl mx-auto my-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent opacity-5 animate-pulse-slow"></div>
      <h2 className="text-4xl font-bold text-primary mb-10 text-center relative z-10 drop-shadow-md"
        style={{ textShadow: '0 0 10px rgba(50, 158, 166, 0.6)' }}
      >
        Book Your Exclusive Appointment
      </h2>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white relative z-10 p-6 bg-gray-800 rounded-lg shadow-inner border border-primary border-opacity-30"
          >
            <h3 className="text-3xl font-bold text-primary mb-4">Booking Confirmed!</h3>
            <p className="text-lg text-gray-300">Thank you for booking with Janti Salon. We look forward to seeing you!</p>
            <AnimatedButton onClick={() => {
              setIsSuccess(false);
              setStep(1);
              setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                date: '',
                time: '',
              });
            }} className="mt-8 py-3 px-8 text-lg">Book Another Appointment</AnimatedButton>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} key="booking-form" className="relative z-10">
            {renderStep()}
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingForm;
