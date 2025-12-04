import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import GetInvolved from "../components/GetInvolved";
import InspirationQuote from "../components/InspirationQuote";

const Blogged_Page = () => {
  const { id } = useParams();

  const blogPost = {
    id: 1,
    title:
      "Keynote Speaker at the Association of Kenyan Students in Hungary AGM",
    content: [
      "As a Keynote Speaker at the Association of Kenyan Students in Hungary AGM, I was able to represent DOSZ International PhD and DLA Candidates in Hungary and welcomed our new PhD students from Kenya in tandem with bringing on board the new leadership of the student body.",
      "As I highlighted matters on Collaboration beyond borders, Hon. Valarie Rugene from the Embassy of Kenya in Austria insisted on Unity among Kenyans abroad.",
      "Collaborations are key towards a bright future and we as Masterkey Initiatives believe that we can raise the bar together, in Unity, both at home (Kenya) and beyond borders.",
      "#makingadifference",
    ],
    images: [
      "/masterkeys2.jpg",
      "/masterkeys3.jpg",
      "/masterkeys4.jpg",
      "/masterkeys5.jpg",
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-gray-500 text-sm mb-4 flex items-center space-x-1">
          <Link to="/" className="hover:text-blue-700 transition">
            <HomeIcon fontSize="small" />
          </Link>
          <NavigateNextIcon fontSize="small" />
          <Link to="/blog" className="hover:text-blue-700 transition">
            Blogs
          </Link>
          <NavigateNextIcon fontSize="small" />
          <span className="text-gray-900 font-medium truncate">
            {blogPost.title}
          </span>
        </nav>

        {/* Blog Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        >
          {blogPost.title}
        </motion.h1>

        {/* Blog Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {blogPost.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={img}
                alt={`blog-${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Blog Content */}
        <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
          {blogPost.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* AOB */}
        <div className="flex flex-col gap-10 max-w-7xl mx-auto my-10">
          <InspirationQuote
            text="When a storm attacks, all big trees get uprooted, but simple grass always survives. Being simple and egoless makes us more powerful and stable."
            who="Mindsets"
          />

          <GetInvolved />
        </div>
      </div>
    </div>
  );
};

export default Blogged_Page;
