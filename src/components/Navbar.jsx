import { useState } from "react";
import { Menu, X, HeartHandshake } from "lucide-react";
import { NavLink } from "react-router-dom";
import DonationForm from "./DonationForm"; // Import the donation component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block  text-gray-800 hover:text-rose-900 transition-all duration-300 ${
      isActive ? "border-b-2 border-gray-800 font-bold" : ""
    }`;

  return (
    <nav className="bg-gray-50 bg-opacity-50 text-white p-2 shadow-sm md:p-4 fixed w-full top-0 z-50">
      <div className="md:max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            className="bg-white w-8 h-8 rounded"
            alt="Masterkey Logo"
          />
          <h1 className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">
            Masterkey Initiatives.
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-baseline space-x-6 ">
          <NavLink
            to="/"
            onClick={() => (window.location.href = "/")}
            className={linkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/focus"
            onClick={() => (window.location.href = "/focus")}
            className={linkClass}
          >
            Our Focus Areas
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => (window.location.href = "/services")}
            className={linkClass}
          >
            What we do
          </NavLink>
          <NavLink
            to="/our-team"
            onClick={() => (window.location.href = "/our-team")}
            className={linkClass}
          >
            Our Team
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={() => (window.location.href = "/contact-us")}
            className={linkClass}
          >
            Partner With Us
          </NavLink>

          {/* Donate Button with Icon */}
          <DonationForm text={"Support Us"} Icon={HeartHandshake} />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className="cursor-pointer" />
          ) : (
            <Menu size={24} className="cursor-pointer" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4 mt-2 rounded bg-opacity-80">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setIsOpen(false)((window.location.href = "/"))}
          >
            Home
          </NavLink>
          <NavLink
            to="/focus"
            className={linkClass}
            onClick={() => setIsOpen(false)((window.location.href = "/focus"))}
          >
            Our Focus Areas
          </NavLink>
          <NavLink
            to="/services"
            className={linkClass}
            onClick={() =>
              setIsOpen(false)((window.location.href = "/services"))
            }
          >
            What we do
          </NavLink>
          <NavLink
            to="/our-team"
            className={linkClass}
            onClick={() =>
              setIsOpen(false)((window.location.href = "/our-team"))
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="/contact-us"
            className={linkClass}
            onClick={() =>
              setIsOpen(false)((window.location.href = "/contact-us"))
            }
          >
            Partner With Us
          </NavLink>

          {/* Mobile Donate Button */}
          <div>
            <DonationForm text={"Support Us"} Icon={HeartHandshake} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
