import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroTexts = [
  "Unlock Your Potential",
  "Empower Yourself for Success",
  "Transform Your Future",
  "Lead, Inspire, & Grow",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState(heroTexts[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % heroTexts.length; // Loop through texts
      setCurrentText(heroTexts[index]);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-brown-800 text-center px-6 bg-beige-100">
      <motion.div
        className="relative max-w-2xl flex flex-col gap-4 mt-20 z-10 bg-gray-900/5 md:p-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Text - Changing */}
        <motion.h2
          key={currentText} // Helps Framer Motion animate changes
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {currentText}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white opacity-90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Join the <strong>Master Key Mentorship Program</strong> and take the
          next step in your personal and professional growth.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#about"
          className="flex items-center text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded mt-6 px-6 py-3 text-center text-lg gap-4 mx-auto shadow-lg animate-bounce"
          id="learn_more"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Start Your Journey
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
