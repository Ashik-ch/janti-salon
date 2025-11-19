import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = [
  { id: 1, name: "Hair Styling", price: 80 },
  { id: 2, name: "Makeup Artistry", price: 120 },
  { id: 3, name: "Nail Enhancements", price: 60 },
  { id: 4, name: "Luxurious Spa", price: 150 },
  { id: 5, name: "Hair Treatments", price: 110 },
  { id: 6, name: "Facial Treatments", price: 90 },
];

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const addToCart = (service) => {
    if (!cart.find((s) => s.id === service.id)) {
      setCart([...cart, service]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((s) => s.id !== id));
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const neonCard = `
    bg-gray-900/60 border border-teal-400/30 backdrop-blur-xl
    shadow-[0_0_25px_rgba(50,158,166,0.4)] hover:shadow-[0_0_40px_rgba(50,158,166,0.7)]
    transition-all duration-300
  `;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 text-white relative">

      {/* ========== NEON HEADER ========== */}
      <h2 className="text-center text-5xl font-bold mb-10 tracking-wider uppercase">
        <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent ">
          Book Your Style
        </span>
      </h2>

      <AnimatePresence mode="wait">
        {/* ---------------- STEP 1: SELECT SERVICES ---------------- */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {serviceOptions.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.01 }}
                className={`p-6 rounded-xl cursor-pointer ${neonCard}`}
                onClick={() => addToCart(service)}
              >
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-teal-300">${service.price}</p>
                {cart.find((s) => s.id === service.id) && (
                  <p className="text-green-400 mt-2 text-sm">✓ Added to cart</p>
                )}
              </motion.div>
            ))}

            <div className="col-span-full flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={cart.length === 0}
                className="mt-4 px-10 py-3 rounded-full bg-teal-500 hover:bg-teal-400 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all"
              >
                Review Cart →
              </button>
            </div>
          </motion.div>
        )}

        {/* ---------------- STEP 2: CART REVIEW ---------------- */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-6 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-teal-400/20"
          >
            <h3 className="text-3xl font-bold mb-6">Your Service Cart</h3>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 mb-3 rounded-lg bg-gray-800 border border-gray-700"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-teal-300">${item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600"
              >
                ← Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="px-10 py-3 rounded-full bg-teal-500 hover:bg-teal-400"
              >
                Continue →
              </button>
            </div>
          </motion.div>
        )}

        {/* ---------------- STEP 3: USER DETAILS ---------------- */}
        {step === 3 && (
          <motion.form
            key="step3"
            onSubmit={() => setStep(4)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-6 bg-gray-900/40 rounded-xl p-6 border border-gray-700"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-4 rounded-lg bg-gray-800 border border-gray-700"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-4 rounded-lg bg-gray-800 border border-gray-700"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-4 rounded-lg bg-gray-800 border border-gray-700"
              required
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-10 py-3 rounded-full bg-teal-500 hover:bg-teal-400"
              >
                Continue →
              </button>
            </div>
          </motion.form>
        )}

        {/* ---------------- STEP 4: DATE & TIME ---------------- */}
        {step === 4 && (
          <motion.form
            key="step4"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-6 rounded-xl bg-gray-900/40 border border-gray-700"
          >
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 mb-4"
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 mb-4"
              required
            />

            <div className="flex justify-between">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 rounded-full bg-teal-500 hover:bg-teal-400"
              >
                {isSubmitting ? "Submitting..." : "Confirm Booking"}
              </button>
            </div>
          </motion.form>
        )}

        {/* ---------------- SUCCESS SCREEN ---------------- */}
        {isSuccess && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-gray-800 p-10 rounded-xl shadow-xl"
          >
            <h3 className="text-4xl font-bold text-teal-400 mb-4">
              Booking Confirmed!
            </h3>
            <p className="text-gray-300 mb-6">
              Thank you! Your appointment is successfully booked.
            </p>

            <button
              onClick={() => {
                setStep(1);
                setIsSuccess(false);
                setCart([]);
              }}
              className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-400"
            >
              Book Another Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingForm;
