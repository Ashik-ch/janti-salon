import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Janti Al-Thani",
    role: "Founder & Lead Stylist",
    bio: "With a visionary approach, Janti brings over two decades of experience and a passion for redefining beauty standards in Qatar.",
    image: "images/barber.jpg"
  },
  {
    name: "Sara Al-Farsi",
    role: "Creative Director",
    bio: "Sara's innovative techniques and artistic flair ensure every client leaves feeling spectacular and confident.",
    image: "images/barber.jpg"
  },
  {
    name: "Khalid Al-Majid",
    role: "Spa & Wellness Expert",
    bio: "Khalid curates a serene escape, offering bespoke spa treatments that harmonize ancient traditions with modern luxury.",
    image: "images/barber.jpg"
  }
];

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-950 text-white"
    >
      {/* Hero Section for About */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: 'url(https://via.placeholder.com/1920x720?text=About+Janti+Salon)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 drop-shadow-lg"
            style={{ textShadow: '0 0 15px rgba(50, 158, 166, 0.8)' }}
          >
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the journey of Janti Salon, where passion meets precision and luxury defines every experience.
          </p>
        </motion.div>
      </section>

      {/* Story of Janti Salon */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="images/facial.jpg"
              alt="Janti Salon History"
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
            <h2 className="text-4xl font-bold text-primary mb-4">Our Humble Beginnings</h2>
            <p className="text-lg leading-relaxed">
              Janti Salon was founded on the vision of creating a sanctuary where luxury, innovation, and personalized beauty converge. Established in the vibrant heart of Qatar, our salon quickly became a beacon for those seeking not just a service, but an experience. We believe that true beauty transcends aesthetics, embracing confidence, comfort, and cutting-edge artistry.
            </p>
            <p className="text-lg leading-relaxed">
              Our journey began with a commitment to excellence and a passion for transforming lives through exceptional salon services. Every detail, from our serene ambiance to our meticulously selected products, is crafted to ensure an unparalleled visit. We are proud to be a part of Qatar’s evolving landscape, reflecting its rich heritage and forward-thinking spirit in every aspect of our salon’s identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-7xl mx-auto py-20 px-4 bg-gray-900 rounded-lg shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 drop-shadow-md">
          Meet Our Visionary Team
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, true: 0.3 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(50, 158, 166, 0.5)" }}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-700 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary shadow-md"
              />
              <h3 className="text-2xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-md font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-400 text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Premium Qatar Salon Identity Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">A Qatari Icon of Elegance</h2>
            <p className="text-lg leading-relaxed mb-6">
              At Janti Salon, we are deeply rooted in Qatari culture, blending its timeless elegance with a modern, futuristic vision. Our salon is a testament to Qatar's commitment to luxury and excellence, providing a world-class beauty destination for our discerning clientele. We celebrate individuality and empower every person to embrace their unique beauty with grace and confidence.
            </p>
            <p className="text-lg leading-relaxed">
              Experience the pinnacle of beauty services, where tradition meets innovation, and every visit is a journey into sophisticated indulgence. Janti Salon is not just a place for beauty treatments; it's a destination where you discover and refine your personal style, all within an ambiance that reflects the grandeur of Qatar.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/premium-photo/close-up-barber-holding-scissors_23-2148242850.jpg"
              alt="Qatari Culture meets Future"
              className="rounded-lg shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
