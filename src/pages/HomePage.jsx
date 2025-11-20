import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import LandingPage from './LandingPage';
import MagicBento from '../reactBits/magicBento';

const servicesPreview = [
  {
    title: "Hair Styling",
    description: "Transform your look with our expert hair artists.",
    icon: "✂️",
    img: 'images/hairStyling.jpg',
  },
  {
    title: "Luxury Spa",
    description: "Indulge in ultimate relaxation and rejuvenation.",
    icon: "🧖‍♀️",
    img: 'images/spa.jpg',

  },
  {
    title: "Nail Care",
    description: "Exquisite manicures and pedicures for perfect nails.",
    icon: "💅",
    img: 'images/nailcare.jpg',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/booking');
  };

  return (
    <div>

      <LandingPage />
      {/* <Hero /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-gray-950 text-white"
      >

        {/* Services Preview Section */}
        <section className="w-full max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary drop-shadow-md">
            Our Premier Services
          </h2>
          {/* <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" */}
          <motion.div
            className="grid gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <MagicBento
              enableStars
              enableTilt
              enableSpotlight
              enableBorderGlow
              glowColor="132, 0, 255"
              className="p-4 rounded-xl"
            >
            </MagicBento>
          </motion.div>
        </section>

        {/* About Us / Mission Section */}
        <section className="w-full max-w-7xl mx-auto py-20 px-4 bg-gray-900 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://salon77.info/wp-content/uploads/2025/01/Untitled-design-2025-01-07T050139.543.png"
                alt="Janti Salon Interior"
                className="rounded-lg shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-gray-300"
            >
              <h2 className="text-4xl font-bold text-primary mb-4">Our Vision for Beauty</h2>
              <p className="text-lg leading-relaxed">
                At Janti Salon, we believe in a future where beauty knows no bounds. Our mission is to blend cutting-edge techniques with luxurious experiences, offering bespoke services that empower and transform. We are dedicated to creating a sanctuary where every client feels valued, inspired, and exceptionally beautiful.
              </p>
              <p className="text-lg leading-relaxed">
                We are constantly innovating, bringing the latest trends and technologies from around the globe to your fingertips. Our team of master stylists and therapists are not just professionals; they are artists passionate about crafting your perfect look and providing an unforgettable journey of self-care and indulgence.
              </p>
              <AnimatedButton
                onClick={() => navigate('/about')}
                className="mt-6 py-3 px-8 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </AnimatedButton>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-gradient-to-br from-gray-900 to-black py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 drop-shadow-md">
            What Our Clients Say
          </h2>
          <TestimonialSlider />
        </section>

        {/* Call to Action Section */}
        <section className="w-full max-w-7xl mx-auto py-20 px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold text-primary mb-6 drop-shadow-lg"
          >
            Ready for a Transformation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Book your exclusive appointment today and step into the future of beauty and wellness.
          </motion.p>
          <AnimatedButton
            onClick={handleBookAppointment}
            className="text-xl py-4 px-10 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Schedule Your Visit
          </AnimatedButton>
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;
