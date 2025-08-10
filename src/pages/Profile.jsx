import { useParams } from "react-router-dom";
import { Mail, Briefcase } from "lucide-react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Profile = () => {
  const { name, role, imageUrl, bio, email } = useParams();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Banner + Profile */}
      <div className="relative bg-gradient-to-b from-sky-500 to-slate-700 flex items-center justify-center p-8">
        <img
          src={decodeURIComponent(imageUrl)}
          alt={name}
          className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-center p-6 md:p-10 bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {decodeURIComponent(name)}
        </h1>
        <p className="flex items-center gap-2 text-indigo-600 font-medium mb-6">
          <Briefcase size={20} />
          {decodeURIComponent(role)}
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify md:text-left">
          {decodeURIComponent(bio)}
        </p>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${decodeURIComponent(email)}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 transition-all w-fit"
          >
            <Mail size={18} /> Contact
          </a>

          <a
            href={`/our-team`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 transition-all w-fit"
          >
            <PeopleAltIcon size={18} /> Full Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
