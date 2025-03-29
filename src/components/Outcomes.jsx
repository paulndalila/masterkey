import { motion } from "framer-motion";
import { BarChart } from "lucide-react";

const Outcomes = () => {
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
      className="bg-beige-200 p-8 shadow-lg flex items-start gap-6 border-l-4 border-blue-600"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <BarChart className="text-blue-600 w-10 h-10 flex-shrink-0" />
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-wide">
          Outcomes and Impact
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-3">
          <li>
            <strong>Reduction in negative behaviors:</strong> Decreasing
            substance abuse, violence, and delinquency through structured
            mentorship programs.
          </li>
          <li>
            <strong>Academic Improvement:</strong> Boosting academic
            performance, fostering critical thinking, and increasing
            self-motivation among youth.
          </li>
          <li>
            <strong>Enhanced Leadership Skills:</strong> Developing
            decision-making, teamwork, and problem-solving abilities that
            prepare youth for success in their careers and communities.
          </li>
          <li>
            <strong>Increased Self-Esteem & Confidence:</strong> Encouraging
            self-awareness and personal development to help youth realize their
            full potential.
          </li>
          <li>
            <strong>Community Impact:</strong> Empowering youth to take on
            leadership roles in community initiatives, contributing to national
            development.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Outcomes;
