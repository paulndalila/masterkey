import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Empowering Youth Through Mentorship",
    excerpt:
      "How structured mentorship can transform young lives and unlock hidden potential.",
    image: "/masterkey.jpg",
    category: "Mentorship",
  },
  {
    id: 2,
    title: "Digital Skills Every Young Leader Should Have",
    excerpt:
      "A breakdown of the essential digital tools and skills needed in today's world.",
    image: "/masterkeys2.jpg",
    category: "Technology",
  },
  {
    id: 3,
    title: "Why Community Engagement Matters",
    excerpt:
      "Understanding the impact of youth participation in community development.",
    image: "/masterkeys3.jpg",
    category: "Community",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20 px-4 md:px-10 lg:px-20">
      <motion.h1
        className="text-4xl font-extrabold text-gray-800"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
      >
        Blog & Insights
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-600 max-w-2xl"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
      >
        Explore stories, ideas, and insights from the Masterkey Youth
        Initiative. Stay inspired, stay informed.
      </motion.p>

      {/* Blog Grid */}
      <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Card className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 bg-white">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <CardContent className="p-5">
                <span className="text-sm text-purple-600 font-semibold uppercase tracking-wide">
                  {post.category}
                </span>

                <h2 className="text-xl font-bold text-gray-800 mt-2 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <Link to={`/blog/${post.id}/${post.title}`}>
                  <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-2 text-sm font-semibold">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
