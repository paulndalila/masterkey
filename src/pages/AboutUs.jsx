import { motion } from "framer-motion";
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

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-[100%]">
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/masterkey.jpg')",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />
      </div>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-2 md:px-6 lg:px-20">
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
