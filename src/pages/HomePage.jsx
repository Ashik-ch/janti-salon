import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import Hero from './Hero';

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
      {/* <Hero /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-gray-950 text-white"
      >
        <section className="relative overflow-hidden bg-black text-white">
          {/* Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-72 h-72 bg-[#329ea6] opacity-30 blur-[150px] -top-10 -left-10"></div>
            <div className="absolute w-80 h-80 bg-[#39d0d8] opacity-20 blur-[160px] bottom-0 right-0"></div>
          </div>

          <div className="container px-6 py-20 lg:py-36 relative z-10 flex flex-col lg:flex-row items-center gap-16 sm:gap-8">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                Experience <br />
                <span className="bg-gradient-to-r from-[#329ea6] to-[#53d7e0] bg-clip-text text-transparent">
                  Premium Beauty
                </span>
                <br />
                at Janti Salon
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-gray-300 mt-6 text-lg lg:w-3/4"
              >
                Qatar’s premium salon offering luxury hair styling, makeup, spa
                treatments and beauty care — where elegance meets innovation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-8 flex gap-4"
              >
                <button className="px-6 py-3 rounded-full bg-[#329ea6] hover:bg-[#2a848b] transition-all duration-300 text-white font-semibold shadow-lg shadow-[#329ea6]/40">
                  Book Now
                </button>

                <button className="px-6 py-3 rounded-full border border-gray-300 text-white hover:bg-white hover:text-teal-500 transition-all duration-300">
                  View Services
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image with Motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative"
            >
              <motion.img
                src="https://images.fresha.com/lead-images/placeholders/barbershop-54.jpg?class=venue-gallery-large"
                alt="Janti Salon"
                className="rounded-3xl shadow-2xl shadow-[#329ea6]/50 w-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              />

              {/* Floating Glow */}
              <motion.div
                className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#329ea6] opacity-40 blur-3xl rounded-full"
                animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </motion.div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="w-full max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary drop-shadow-md">
            Our Premier Services
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {servicesPreview.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <ServiceCard {...service} />
                {/* {{ ServiceCard | json}} */}
              </motion.div>
            ))}
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
