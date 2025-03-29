import { motion } from "framer-motion";
import { Flag } from "lucide-react";
import conc from "../assets/images/concu.jpg";

const Conclusion = () => {
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
      className="bg-white p-2 sm:p-8 shadow-lg rounded-lg flex flex-col sm:flex-row items-start gap-6 md:border-l-4 md:border-blue-500 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Image Section */}
      <div className="w-full sm:w-1/3">
        <img
          src={conc}
          alt="Mentorship"
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-2/3">
        <div className="flex items-center gap-3 mb-4">
          <Flag className="text-blue-500 w-8 h-8 flex-shrink-0" />
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">
            Conclusion
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
          The Master Key Mentorship Society is more than an organization—it is a
          movement dedicated to equipping Kenyan youth with the skills,
          confidence, and mindset needed to become transformational leaders. By
          fostering creativity, leadership, and socio-economic impact, we
          empower young people to rise above challenges and drive sustainable
          change in their families, communities, and the nation at large.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-base sm:text-md text-justify">
          Through mentorship, leadership training, and development programs, we
          nurture a generation of responsible, innovative, and goal-driven
          individuals who are prepared to lead Kenya into a brighter future.
          Together, we are unlocking the potential of youth and shaping a legacy
          of progress.
        </p>
      </div>
    </motion.div>
  );
};

export default Conclusion;
