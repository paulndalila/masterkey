import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Hero from "../components/Hero";
import VisionMision from "../components/VisionMision";
import CoreFocus from "../components/CoreFocus";
import Outcomes from "../components/Outcomes";
import Objectives from "../components/Objectives";
import Conclusion from "../components/Conclusion";
import Intro from "../components/Intro";
import GetInvolved from "../components/GetInvolved";
import InspirationQuote from "../components/InspirationQuote";
import HomeBlog from "../components/HomeBlog";

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bgImages = ["/masterkey.jpg", "/masterkeys6.jpg", "/masterkeys3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100%]">
      {/* Slide Progress Bar */}
      <motion.div
        key={index} // triggers animation on every slide change
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }} // match your slide interval timing
        className="absolute top-11 md:top-17 left-0 h-2 z-50 bg-gradient-to-r from-[#f5f5f5] via-[#ff8c00] to-[#ff0080]"
      />

      <div
        className="relative min-h-screen bg-cover bg-center transition-all duration-[1500ms]"
        style={{
          backgroundImage: `url('${bgImages[index]}')`,
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />
      </div>

      <section id="about">
        <HomeBlog />
      </section>

      <div className="py-16 bg-gray-50 px-2 md:px-20">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-6 text-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About Us
        </motion.h2>

        {/* Short Intro Section */}
        <Intro />
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2 md:px-6 lg:px-20">
          <div className="space-y-12">
            {/* Overview */}
            <Overview />
            {/* Vision & Mission */}
            <VisionMision />
            {/* Get Involved Section */}
            <GetInvolved />
            {/* Core Focus Areas */}
            <CoreFocus />
            {/* Outcomes and Impact */}
            <Outcomes />
            {/* Key Objectives */}
            <Objectives />
            {/* Conclusion */}
            <Conclusion />

            <InspirationQuote
              text={
                "The youth of today are the leaders of tomorrow. Equip them with the right tools, and they will change the world."
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
