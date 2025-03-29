import { motion } from "framer-motion";
import { Target, Flag } from "lucide-react";

const VisionMision = () => {
  const fadeInSide = (direction) => ({
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <div id="vision" className="grid md:grid-cols-2 gap-8">
      {[
        {
          icon: <Target className="text-green-500 w-10 h-10 flex-shrink-0" />,
          title: "Vision",
          text: "To cultivate a responsible and empowered youth, maximizing their potential to contribute positively to the country.",
          borderColor: "border-green-500",
          direction: "left",
        },
        {
          icon: <Flag className="text-blue-500 w-10 h-10 flex-shrink-0" />,
          title: "Mission",
          text: "To provide Kenyan youth with equal opportunities to realize their fullest potential and become agents of transformation in their communities.",
          borderColor: "border-blue-500",
          direction: "right",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className={`bg-beige-200 p-8 rounded-lg shadow-lg flex items-start gap-6 border-3 ${item.borderColor}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInSide(item.direction)}
        >
          {item.icon}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-wide">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VisionMision;
