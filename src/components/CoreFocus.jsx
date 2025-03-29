import { motion } from "framer-motion";
import { Users } from "lucide-react";
import focusImage from "../assets/images/focus.jpg";

const CoreFocus = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-beige-200 p-2 md:p-8 md:shadow-lg flex flex-col md:flex-row items-center gap-6 md:border-l-4 md:border-red-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Image Section */}
      <img
        src={focusImage}
        alt="Youth Leadership"
        className="w-full md:w-1/3 h-60  object-cover rounded-lg shadow-md"
      />

      {/* Content Section */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-red-700 w-10 h-10 flex-shrink-0" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
            Core Focus Areas
          </h3>
        </div>

        <ul className="list-disc list-inside text-gray-700 text-justify leading-relaxed space-y-3">
          <li>
            <strong>Youth Development:</strong> Preparing young people for
            life’s challenges by enhancing their social, moral, emotional,
            physical, and cognitive skills through structured mentorship
            programs.
          </li>
          <li>
            <strong>Youth Leadership:</strong> Equipping young individuals with
            the confidence and skills to inspire others through action, build
            self-awareness, set goals, and develop essential leadership
            qualities.
          </li>
          <li>
            <strong>Personal Growth:</strong> Fostering self-motivation and
            resilience, helping youth navigate their personal and professional
            journeys with confidence.
          </li>
          <li>
            <strong>Community Engagement:</strong> Encouraging young people to
            actively contribute to their communities through volunteerism,
            social initiatives, and advocacy for positive change.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CoreFocus;
