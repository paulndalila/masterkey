import CampaignIcon from "@mui/icons-material/Campaign";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const HomeBlog = () => {
  const posts = [
    {
      id: 1,
      title: "Association of Kenyan Students in Hungary AGM",
      excerpt:
        "As the keynote speaker at the AGM, we were able to represent DOSZ international PhD students from kenya in tandem with bringing on board the new leadership of the student body. As we highlighted matters on collaboration beyond borders, we also emphasized the importance of unity and collective growth among Kenyan students in Hungary.",
      image: "/masterkeys5.jpg",
    },
  ];

  const latestPost = posts[0];

  return (
    <div className="bg-gray-50 py-15  px-2 md:px-20">
      <div className="mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <CampaignIcon className="text-gray-900 !text-4xl" />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Latest Updates & News
            </h2>
          </div>
          <p className="text-gray-600 mt-2 md:text-lg">
            A glimpse into our latest initiative and ongoing impact.
          </p>
        </motion.div>

        {/* Blog Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <img
              src={latestPost.image}
              alt={latestPost.title}
              className="w-full h-64 object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              {latestPost.title}
            </h3>

            <p className="text-gray-700 mt-3 leading-relaxed line-clamp-2">
              {latestPost.excerpt}
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <a
                className="text-sm text-blue-700 font-semibold hover:underline w-fit"
                href={`/blog/${latestPost.id}/${latestPost.title}`}
              >
                Read Full Story →
              </a>
              <a
                className="text-sm bg-blue-700 hover:bg-blue-800 text-white rounded-sm px-4 py-2 w-fit"
                href="/blog"
              >
                View All Blogs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBlog;
