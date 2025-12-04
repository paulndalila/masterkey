import { motion } from "framer-motion";
const InspirationQuote = (props) => {
  return (
    <motion.div
      className="bg-white p-8 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-xl font-semibold italic text-gray-700">
        "{props.text}"
      </p>
      <span className="block mt-4 text-gray-600 font-medium">
        — {props.who ? props.who : "MasterKey Mentorship Society"}
      </span>
    </motion.div>
  );
};

export default InspirationQuote;
