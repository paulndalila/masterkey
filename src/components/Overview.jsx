import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import overview from "../assets/images/overview.jpg";

const Overview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className="bg-beige-200 p-8 shadow-lg flex flex-col md:flex-row items-start gap-6 border-l-4 border-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Image Section */}
        <img
          src={overview} // Replace with actual image path
          alt="Youth Mentorship"
          className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg shadow-md"
        />

        {/* Text Section */}
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <Lightbulb className="text-red-500 w-10 h-10 flex-shrink-0" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-wide">
              Overview
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            The <strong>Master Key Mentorship Society</strong> is a registered
            organization under Kenya’s Registrar of Societies (Section 4 of the
            Societies Act, Cap 108). Our mission is to{" "}
            <strong className="text-red-800">empower youth</strong> with the
            knowledge, leadership skills, and opportunities necessary to unlock
            their full potential and create{" "}
            <strong className="text-red-800">lasting change</strong> in their
            families and communities.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4 text-justify">
            Through{" "}
            <strong className="text-red-800">
              mentorship, leadership development, and community-driven
              initiatives
            </strong>
            , we equip young individuals with the tools to overcome challenges,
            develop self-confidence, and contribute meaningfully to national
            progress.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Overview;
