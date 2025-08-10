import { motion } from "framer-motion";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import SavingsIcon from "@mui/icons-material/Savings";
import ForumIcon from "@mui/icons-material/Forum";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import BrushIcon from "@mui/icons-material/Brush";
import LanIcon from "@mui/icons-material/Lan";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const servicesData = [
  {
    title: "Leadership Development",
    icon: <PeopleIcon sx={{ fontSize: 56, color: "#6366F1" }} />,
    description:
      "Empowering youth to create jobs, solve problems, promote civic engagement, address social ills, advance gender equality, and prepare for global competition.",
    cta: "Invest in youth leadership for a brighter future.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Youth Scholarship Fund",
    icon: <SchoolIcon sx={{ fontSize: 56, color: "#FACC15" }} />,
    description:
      "Breaking financial barriers to education by providing flexible and inclusive scholarships that keep students in school.",
    cta: "Support equity, prevent dropouts, and nurture future leaders.",
    image:
      "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Student SACCO",
    icon: <SavingsIcon sx={{ fontSize: 56, color: "#22C55E" }} />,
    description:
      "Promoting financial independence through saving, investment, and entrepreneurship opportunities for students.",
    cta: "Foster financial literacy and business growth.",
    image:
      "https://images.unsplash.com/photo-1509223029680-bf5c4fe21130?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Open Forum Discussions",
    icon: <ForumIcon sx={{ fontSize: 56, color: "#EC4899" }} />,
    description:
      "Creating spaces for youth to discuss politics, culture, and social issues — broadcasted on Masterkey TV and FM.",
    cta: "Encourage unity and cultural balance.",
    image:
      "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Extension Services & Business Development",
    icon: <VolunteerActivismIcon sx={{ fontSize: 56, color: "#3B82F6" }} />,
    description:
      "Empowering youth to volunteer their skills for community growth, especially in agriculture and local economic development.",
    cta: "Strengthen communities through youth engagement.",
    image:
      "https://images.unsplash.com/photo-1590103514226-48facf4657fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Talent Development, Media & Arts",
    icon: <BrushIcon sx={{ fontSize: 56, color: "#A855F7" }} />,
    description:
      "Showcasing talents through competitions, creativity challenges, and media coverage to support the scholarship fund.",
    cta: "Promote creativity beyond academics.",
    image:
      "https://images.unsplash.com/photo-1475275166152-f1e8005f9854?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Youth Networking & Opportunity Creation",
    icon: <LanIcon sx={{ fontSize: 56, color: "#F97316" }} />,
    description:
      "Connecting youth with mentorship, career opportunities, skills training, and funding resources.",
    cta: "Build networks for success.",
    image:
      "https://images.unsplash.com/photo-1722963220475-979db2dbf216?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Services = () => {
  return (
    <div className="w-full">
      {/* HERO */}
      <section
        className="h-screen flex flex-col justify-center items-center top-10 text-center px-6 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528805099081-4dfca0655a5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // replace with your actual image path
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-extrabold text-white mb-6"
        >
          What We Do
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative text-base md:text-lg text-gray-100 max-w-3xl"
        >
          Our programs empower youth through leadership, education, financial
          literacy, creativity, and community engagement.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative text-base md:text-lg text-gray-100 border-2 border-gray-100 px-4 py-1 mt-4 cursor-pointer hover:bg-gray-100 hover:text-gray-800 duration-200 animate-bounce"
          href="#services"
        >
          Learn More
        </motion.a>
      </section>

      {/* SERVICE SECTIONS */}
      <div id="services">
        {servicesData.map((service, idx) => (
          <section
            key={idx}
            id={`service-${idx}`}
            className={`md:h-screen flex flex-col lg:flex-row ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE SIDE */}
            <div className="lg:w-1/2 h-1/2 lg:h-full">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>

            {/* TEXT SIDE */}
            <div className="lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center p-10 lg:p-20 bg-white">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {service.icon}
                <h2 className="text-4xl font-bold mt-4 mb-4 text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <span className="text-indigo-600 font-medium">
                  {service.cta}
                </span>

                {/* NEXT BUTTON */}
                <div>
                  {idx < servicesData.length - 1 && (
                    <button
                      className="mt-6 flex items-center gap-2 px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition cursor-pointer"
                      onClick={() => {
                        document
                          .getElementById(`service-${idx + 1}`)
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ArrowRightAltIcon />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
