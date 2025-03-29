import { motion } from "framer-motion";
import banner from "../assets/images/logo.jpg";

const Intro = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-beige-200 rounded-xl shadow-md flex items-center justify-center p-6 mb-12 border-b-2 border-red-300">
      <motion.img
        src={banner}
        alt="Master Key Logo"
        className="w-16 h-16 rounded-full border-b-4 border-red-300 md:w-20 md:h-20 mr-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      />
      <motion.p
        className="text-lg text-gray-700 leading-relaxed max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Master Key Mentorship Society is a{" "}
        <strong className="text-gray-800">youth-focused organization</strong>{" "}
        dedicated to empowering young people with{" "}
        <strong className="text-gray-800">
          leadership, personal development, and life skills
        </strong>{" "}
        to help them{" "}
        <strong className="text-gray-800">unlock their full potential</strong>{" "}
        and become <strong className="text-gray-800">changemakers</strong> in
        their communities.
      </motion.p>
    </div>
  );
};

export default Intro;
