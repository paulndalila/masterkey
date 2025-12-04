import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GetInvolved from "../components/GetInvolved";
import InspirationQuote from "../components/InspirationQuote";

const posts = [
  {
    id: 1,
    title: "Empowering Youth Through Mentorship",
    excerpt:
      "How structured mentorship can transform young lives and unlock hidden potential.",
    image: "/masterkey.jpg",
    category: "Mentorship",
    readTime: "5 min read",
    date: "Dec 2, 2025",
  },
  {
    id: 2,
    title: "Digital Skills Every Young Leader Should Have",
    excerpt:
      "A breakdown of the essential digital tools and skills needed in today's world.",
    image: "/masterkeys2.jpg",
    category: "Technology",
    readTime: "7 min read",
    date: "Nov 28, 2025",
  },
  {
    id: 3,
    title: "Why Community Engagement Matters",
    excerpt:
      "Understanding the impact of youth participation in community development.",
    image: "/masterkeys3.jpg",
    category: "Community",
    readTime: "4 min read",
    date: "Nov 25, 2025",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-gray-500/10 to-slate-600/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative pt-24 pb-16 px-4 md:px-10 lg:px-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              LATEST INSIGHTS
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-white to-gray-600 mb-6 leading-tight z-50">
              Stories That Inspire
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore transformative stories, actionable insights, and ideas
              that empower the next generation of leaders
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid with Enhanced Cards */}
      <div className="px-4 md:px-10 lg:px-20 pb-20">
        <motion.div
          className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 group">
                {/* Image Container with Overlay */}
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white bg-rose-600/90 backdrop-blur-sm rounded-full uppercase tracking-wider shadow-lg">
                    {post.category}
                  </span>
                </div>

                <CardContent className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* CTA Button */}
                  <Link to={`/blog/${post.id}/${post.title}`} className="block">
                    <Button className="w-full !bg-gray-500 !text-white rounded-xl py-3 text-sm font-bold uppercase tracking-wide shadow-md hover:shadow-xl transition-all duration-300 group">
                      <span className="flex items-center justify-center gap-2">
                        Read Article
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-20">
        <InspirationQuote
          text="When a storm attacks, all big trees get uprooted, but simple grass always survives. Being simple and egoless makes us more powerful and stable."
          who="Mindsets"
        />

        <GetInvolved />
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Blog;
