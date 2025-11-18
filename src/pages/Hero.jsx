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

                {/* Floating Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,158,166,0.25),transparent_70%)]"></div>

                {/* Content */}
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

            {/* ----------------- */}
            <section className="relative min-h-screen flex items-center justify-center bg-[#0e1b1c] overflow-hidden">

                {/* Floating Particles */}
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

            <section className="relative overflow-hidden bg-black text-white">
                {/* Glow Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute w-72 h-72 bg-[#329ea6] opacity-30 blur-[150px] -top-10 -left-10"></div>
                    <div className="absolute w-80 h-80 bg-[#39d0d8] opacity-20 blur-[160px] bottom-0 right-0"></div>
                </div>

                <div className="container ms-36  px-6 py-20 lg:py-36 relative z-10 flex flex-col lg:flex-row items-center gap-16">

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

                            <button className="px-6 py-3 rounded-full border border-gray-300 text-white hover:bg-white hover:text-black transition-all duration-300">
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
        </div>
    );
}
