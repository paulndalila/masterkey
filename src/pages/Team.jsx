import { LinkedIn, Twitter, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import ernest from "../assets/images/ernest.jpg";
import sharon from "../assets/images/sharon.jpg";
import scola from "../assets/images/scola.jpg";
import erastus from "../assets/images/erastus.jpg";
import zachariah from "../assets/images/zachariah.jpg";

const team = [
  {
    name: "Zachariah Kuya",
    role: "Chairman",
    imageUrl: zachariah,
    bio: "Zachariah Kuya serves as the Chairman of Master Key Mentorship Society. He is also the Lead Pastor at Maseno Miracle Centre Church, where he has spent over 15 years mentoring young people and developing leadership programs. Zachariah's mission is to inspire youth to live with purpose and integrity. His extensive experience in church leadership, community outreach, and mentorship allows him to guide Master Key’s vision with a deep understanding of the transformative power of faith, education, and strong values. He is a passionate advocate for personal development, national unity, and youth engagement in community building. Under his leadership, the society has grown into a trusted resource for youth leadership development across Kenya.",
    email: "zachariah@masterkey.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Erastus Wasikoyo",
    role: "Vice Chairman",
    imageUrl: erastus,
    bio: "Erastus Wasikoyo is an agronomist and researcher who serves as the Vice Chairman of Master Key Mentorship Society. With a background in environmental sustainability and agricultural development, Erastus brings an innovative approach to youth empowerment. He is passionate about using agriculture as a tool for socio-economic development, particularly in rural communities. Erastus works closely with schools and community organizations to promote agricultural education and sustainable farming practices, encouraging youth to explore careers in agribusiness. His leadership role focuses on expanding the society’s reach into rural and agricultural communities, providing youth with knowledge that helps them improve both their livelihoods and their communities.",
    email: "erastus@masterkey.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Scholastic Namuki",
    role: "Treasurer",
    imageUrl: scola,
    bio: "Scholastic Namuki, a dedicated teacher and advocate for educational empowerment, serves as the Treasurer for the society. Scholastic brings her experience in the education sector to the role, where she ensures that financial resources are effectively allocated to support Master Key’s programs. Her focus on educational development drives her to champion projects that provide youth with scholarships, educational tools, and access to quality learning experiences. Scholastic also works to establish partnerships with local schools, universities, and community centers to expand Master Key’s educational initiatives. She is passionate about breaking down barriers to education and ensuring that all youth, regardless of their background, have access to the resources they need to succeed.",
    email: "scholastic@example.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ernest Ambole",
    role: "Secretary",
    imageUrl: ernest,
    bio: "Ernest Ambole serves as the Secretary for Master Key Mentorship Society. With a background in youth development and social work, Ernest plays a pivotal role in coordinating day-to-day activities, managing communication, and ensuring that the society’s goals are met efficiently. He has extensive experience working with youth in both formal and informal settings, providing counseling, mentorship, and career development guidance. Ernest is dedicated to empowering youth to find their purpose and make positive contributions to society. His efforts focus on building community engagement programs, organizing workshops, and advocating for issues such as mental health, substance abuse, and career opportunities. Ernest’s work is central to fostering a supportive and nurturing environment for all youth involved in the society’s programs.",
    email: "ernest@example.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sharon Chahale Wata",
    role: "Deputy Secretary",
    imageUrl: sharon,
    bio: "Sharon Chahale Wata is the Deputy Secretary of the Master Key Mentorship Society. A lawyer by profession, Sharon specializes in youth advocacy, legal education, and rights awareness. Her background in law provides a strong foundation for promoting social justice, equality, and legal literacy among youth. She works to ensure that youth understand their rights and responsibilities, both within their communities and within the broader context of Kenyan society. Sharon also plays a key role in coordinating the society’s volunteer programs and outreach initiatives, providing training and resources to help youth navigate legal, social, and economic challenges. Her work in advocacy, particularly regarding youth empowerment and gender equality, is crucial in shaping the society’s inclusive and progressive programs.",
    email: "sharon@example.com",
    linkedin: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Meet Our Leadership
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Guiding the next generation of Kenyan leaders through mentorship,
          education, and empowerment.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6">
        {team.map((person) => (
          <motion.div
            key={person.name}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                {person.name}
              </h3>
              <p className="text-indigo-600 font-medium">{person.role}</p>
              <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                {person.bio}
              </p>
              <a
                href={`/profile/${encodeURIComponent(
                  person.name
                )}/${encodeURIComponent(person.role)}/${encodeURIComponent(
                  person.imageUrl
                )}/${encodeURIComponent(person.bio)}/${encodeURIComponent(
                  person.email
                )}`}
                className="text-xs text-blue-600 underline cursor-pointer"
              >
                Read more...
              </a>
              <div className="flex gap-4 mt-5 text-gray-500">
                {person.linkedin && (
                  <a href={person.linkedin} aria-label="LinkedIn">
                    <LinkedIn fontSize="small" />
                  </a>
                )}
                {person.twitter && (
                  <a href={person.twitter} aria-label="Twitter">
                    <Twitter fontSize="small" />
                  </a>
                )}
                {person.email && (
                  <a href={`mailto:${person.email}`} aria-label="Email">
                    <Email fontSize="small" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
