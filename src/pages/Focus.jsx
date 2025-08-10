import { motion } from "framer-motion";
import {
  BookOpen,
  DollarSign,
  Smile,
  Users,
  Star,
  Handshake,
} from "lucide-react";
import DonationForm from "../components/DonationForm";
// import togetherPhoto from "../assets/images/banner.jpg";
// import { Divider } from "@mui/material";
import WhoWeAreCont from "../components/WhoWeAreCont";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FocusArea = ({ icon: Icon, title, children }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <Icon className="text-red-700 w-12 h-12 mb-4" />
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-700">{children}</p>
  </motion.div>
);

const Focus = () => {
  return (
    <div className="relative py-8 container mx-auto px-4 md:px-6 lg:px-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Decorative blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-indigo-300 rounded-full blur-3xl opacity-30"></div>

      <motion.h2
        className="focus_text pt-6 w-full md:w-1/2 text-center md:text-left text-5xl md:text-6xl font-extrabold mb-10 text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Our Major Areas of Focus
      </motion.h2>
      <motion.div
        className="w-25 border-b-2 md:border-b-4 mx-auto md:ms-1 border-gray-800 mb-12"
        initial={{ width: 0 }}
        whileInView={{ width: 50 }}
        viewport={{ once: true }}
        variants={fadeInUp}
      ></motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FocusArea icon={BookOpen} title="Academic Growth">
          Equipping youth with critical thinking and lifelong learning skills to
          build meaningful futures and embrace opportunities.
        </FocusArea>

        <FocusArea icon={DollarSign} title="Financial Stability">
          Instilling financial literacy to help youth secure their future, plan
          wisely, and avoid the pitfalls of careless economic decisions.
        </FocusArea>

        <FocusArea icon={Smile} title="Emotional Well-Being">
          Providing tools and support to help youth navigate stress, boost
          resilience, and stay grounded, no matter what life throws their way.
        </FocusArea>

        <FocusArea icon={Users} title="Social Growth">
          Encouraging youth to build meaningful relationships, improve
          communication, and embrace collaboration, recognizing that no life
          thrives in isolation.
        </FocusArea>

        <FocusArea icon={Star} title="Spiritual Growth">
          Inspiring youth to explore their values, discover their purpose, and
          create a legacy that aligns with their vision for the future.
        </FocusArea>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 w-full bg-gray-100 mt-6 p-4 border-l-4 border-red-700">
        <div className="w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-bold">
            Interested in what we do? Join our cause!
          </h2>
          <p className="text-sm text-gray-700 text-wrap">
            Your contribution, whether professional expertise, donations,
            supplies, or food, will be greatly appreciated and make a meaningful
            impact.
          </p>
        </div>
        <DonationForm text={"Volunteer"} Icon={Handshake} color={"secondary"} />
      </div>

      <WhoWeAreCont />
    </div>
  );
};

export default Focus;
