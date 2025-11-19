import { motion } from "framer-motion";

const LandingPage = () => {
    return (
        <div className="relative w-full h-[90vh] overflow-hidden bg-black text-white">

            {/* Neon Scanning Line */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-[#329ea6]"
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Liquid Morphing Frame */}
            <motion.div
                className="absolute w-[55vw] h-[55vh] left-12 top-20 rounded-[40%] bg-[#329ea6]/10 blur-[90px]"
                animate={{
                    borderRadius: ["40% 60% 50% 70%", "70% 40% 60% 50%", "60% 50% 70% 40%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Holographic Grid */}
            <div className="absolute inset-0 opacity-[0.08]" style={{
                backgroundImage: "linear-gradient(#329ea6 1px, transparent 1px), linear-gradient(90deg, #329ea6 1px, transparent 1px)",
                backgroundSize: "60px 60px"
            }}></div>

            {/* Irregular Layout Wrapper */}
            <div className="relative z-20 px-10 pt-32 text-center flex flex-col items-center">

                {/* Futuristic Label */}
                <motion.span
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-white font-extralight tracking-[0.4em] text-sm uppercase"
                >
                    ★ Premium Salon Experience
                </motion.span>

                {/* Extreme Futuristic Title */}
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[4rem] md:text-[6rem] leading-[0.9] font-black tracking-tight 
                     mix-blend-difference font-[Montserrat]"
                >
                    <span className="text-9xl  text-white me-6">JANTI</span>
                    <span className="text-9xl  font-extrabold text-transparent stroke-aqua stroke-[2px]">
                        SALON                </span>

                </motion.h1>

                {/* Subtext with Glitch Tick */}
                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 text-xl text-white /70 max-w-md font-light futuristic-text"
                >
                    Beauty redefined with <span className="text-[#4bd1da]">precision</span>,
                    <br />
                    crafted for a new era.
                </motion.p>

                {/* Neon Button */}
                <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 0 25px #329ea6" }}
                    whileTap={{ scale: 0.92 }}
                    className="mt-10 px-10 py-4 rounded-full uppercase tracking-wide 
                     font-semibold text-sm bg-[#329ea6]/20 border border-[#329ea6]/60
                     shadow-[0_0_12px_rgba(50,158,166,0.4)]"
                >
                    Book Appointment
                </motion.button>




            </div>

            {/* Floating Holographic Shards */}
            <FloatingShard delay={0} size={40} x="70%" y="20%" />
            <FloatingShard delay={1} size={60} x="85%" y="60%" />
            <FloatingShard delay={2} size={30} x="50%" y="80%" />
        </div >
    );
}

const FloatingShard = ({ size, x, y, delay }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.8, 0.3], y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className="absolute bg-[#329ea6] blur-xl rounded-xl"
        style={{
            width: size,
            height: size / 3,
            left: x,
            top: y,
            rotate: "20deg",
            opacity: 0.5
        }}
    />
);
export default LandingPage;
