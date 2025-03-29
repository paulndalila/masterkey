import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import DonationForm from "./DonationForm";

const GetInvolved = () => {
  return (
    <motion.div className="bg-red-100 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border-red-500">
      <HeartHandshake className="text-red-600 w-12 h-12" />
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Make a Difference Today
        </h3>
        <p className="text-gray-700 leading-relaxed text-center md:text-left">
          Whether through mentorship, volunteering, or donations, your support
          helps shape the next generation of leaders. Join us in making a
          lasting impact.
        </p>
      </div>
      {/* Donation Button that Triggers the Modal */}
      <DonationForm text={"Donate Now"} />
    </motion.div>
  );
};

export default GetInvolved;
