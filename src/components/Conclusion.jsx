import { motion } from "framer-motion";
import { Flag } from "lucide-react";

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
      className="bg-beige-200 p-8 shadow-lg flex items-start gap-6 border-l-4 border-blue-400"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Flag className="text-brown-600 w-10 h-10 flex-shrink-0" />
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-wide">
          Conclusion
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg text-justify">
          The Master Key Mentorship Society is more than an organization—it is a
          movement dedicated to equipping Kenyan youth with the skills,
          confidence, and mindset needed to become transformational leaders. By
          fostering creativity, leadership, and socio-economic impact, we
          empower young people to rise above challenges and drive sustainable
          change in their families, communities, and the nation at large.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-lg text-justify">
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
