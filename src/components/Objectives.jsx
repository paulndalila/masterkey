import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Objectives = () => {
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
      className="bg-beige-200 p-8 shadow-lg flex items-start gap-6 border-l-4 border-green-600"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <CheckCircle className="text-green-600 w-10 h-10 flex-shrink-0" />
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-wide">
          Key Objectives
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-3">
          <li>
            <strong>Empower Youth Creativity and Innovation:</strong> Encourage
            young people to develop solutions for societal challenges through
            mentorship.
          </li>
          <li>
            <strong>Drive Sustainable Development:</strong> Promote
            sustainability by introducing engineering and design solutions that
            align with global goals.
          </li>
          <li>
            <strong>Develop Core Skills:</strong> Strengthen teamwork,
            communication, and leadership intelligence by integrating emotional
            and social intelligence.
          </li>
          <li>
            <strong>Inspire Growth and Motivation:</strong> Enable youth to
            craft personal stories and legacies that drive long-term motivation.
          </li>
          <li>
            <strong>Catalyze Socio-Economic Impact:</strong> Mobilize youth for
            economic and community-driven initiatives that promote national
            progress.
          </li>
          <li>
            <strong>Engage in Nation-Building:</strong> Foster patriotism,
            volunteerism, and active participation in national development
            projects.
          </li>
          <li>
            <strong>Secure Resources and Funding:</strong> Attract funding to
            sustain impactful programs that empower youth at scale.
          </li>
          <li>
            <strong>Foster Strategic Partnerships:</strong> Collaborate with
            organizations and institutions to provide resources and expertise
            for youth development.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Objectives;
