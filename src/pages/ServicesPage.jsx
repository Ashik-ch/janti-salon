import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const serviceCategories = [
  {
    title: "Hair Styling & Care",
    description: "Expert cuts, coloring, and treatments for all hair types. Discover your perfect style.",
    image: "images/hairStyling.jpg",
  },
  {
    title: "Makeup Artistry",
    description: "From natural enhancements to glamorous transformations for any occasion.",
    image: "images/facial.jpg",
  },
  {
    title: "Nail Enhancements",
    description: "Manicures, pedicures, and nail art using premium products.",
    image: "images/nailcare.jpg",
  },
  {
    title: "Luxurious Spa",
    description: "Rejuvenating body treatments, massages, and holistic therapies.",
    image: "images/spa.jpg",
  },
  {
    title: "Hair Treatments",
    description: "Deep conditioning, keratin, and specialized treatments for healthy, vibrant hair.",
    image: "https://via.placeholder.com/600x400?text=Hair+Treatments",
  },
  {
    title: "Facial Treatments",
    description: "Advanced facial therapies for radiant, youthful skin.",
    image: "https://via.placeholder.com/600x400?text=Facial+Treatments",
  },
];

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-950 text-white"
    >
      {/* Hero Section for Services */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: 'url(https://via.placeholder.com/1920x720?text=Janti+Salon+Services)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 drop-shadow-lg"
            style={{ textShadow: '0 0 15px rgba(50, 158, 166, 0.8)' }}
          >
            Our Exquisite Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover a world of luxury and innovation with our comprehensive range of beauty and wellness treatments.
          </p>
        </motion.div>
      </section>

      <div className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-md">
          Explore Our Offerings
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {serviceCategories.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
