import { motion } from "framer-motion";

export default function Hero() {
    const particles = Array.from({ length: 35 });

    return (
        <div>
            <section className="relative h-screen w-full overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

                {/* Dark / Color Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0e1b1c]/80"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,158,166,0.25),transparent_70%)]"></div>

                <div className="relative z-10 flex items-center justify-center h-full px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="backdrop-blur-xl bg-white/10 border border-white/20 
          rounded-3xl p-10 md:p-14 text-center max-w-3xl shadow-[0_0_40px_rgba(50,158,166,0.5)]"
                    >
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg"
                        >
                            Janti Salon
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 1 }}
                            className="mt-4 text-xl text-gray-200 md:text-2xl"
                        >
                            Elevate Your Beauty — Qatar’s Premium Salon Experience.
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 px-10 py-4 rounded-full text-lg font-semibold 
            bg-[#329ea6] text-white shadow-lg shadow-[#329ea6]/40 
            hover:bg-[#2a8c93] transition-all"
                        >
                            Book Appointment
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* floating */}
            <section className="relative min-h-screen flex items-center justify-center bg-[#0e1b1c] overflow-hidden">

                {particles.map((_, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            y: [-40, 40],
                            x: [0, (Math.random() - 0.5) * 80]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.15
                        }}
                        className="absolute w-1 h-1 bg-[#329ea6] rounded-full blur-[2px]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}

                {/* Glow gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,158,166,0.3),transparent_70%)] pointer-events-none" />

                {/* Glassmorphic Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 backdrop-blur-xl bg-white/10 
        border border-white/20 rounded-3xl p-10 md:p-14 text-center
        max-w-3xl shadow-[0_0_60px_rgba(50,158,166,0.45)]"
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                    >
                        Janti Salon
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-4 text-xl text-gray-200 md:text-2xl"
                    >
                        Elevate Your Beauty. Qatar’s Elite Premium Experience.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-10 py-4 rounded-full text-lg font-semibold 
          bg-[#329ea6] text-white shadow-lg shadow-[#329ea6]/40 
          hover:bg-[#2a8c93] transition-all"
                    >
                        Book Appointment
                    </motion.button>
                </motion.div>

            </section>


            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f1c1e]">

                {/* Futuristic floating orbs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#329ea6] blur-3xl opacity-40"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-teal-300 blur-3xl opacity-30"
                />

                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_40%,rgba(255,255,255,0)_100%)] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 max-w-3xl text-center shadow-[0_0_50px_rgba(50,158,166,0.4)]"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                        Janti Salon
                    </h1>

                    <p className="mt-4 text-xl text-gray-200 md:text-2xl">
                        Qatar’s Premium Luxury Salon Experience
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-10 py-4 rounded-full text-lg font-semibold 
          bg-[#329ea6] text-white shadow-lg shadow-[#329ea6]/40 
          hover:bg-[#2a8c93] transition-all"
                    >
                        Book Your Glow
                    </motion.button>
                </motion.div>

                <motion.img
                    src="https://images.fresha.com/locations/location-profile-images/2654458/5139018/c3f2d616-3720-42f5-9091-cca11f16f273-JantiSalonforMen-QA-DohaMunicipality-Doha-Fresha.jpg?class=gallery-modal-large&dpr=2&watermark=true"
                    alt="Premium Salon"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] opacity-100 rounded-t-full"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />

            </section>


        </div>
    );
}
