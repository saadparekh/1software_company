import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleScroll = (id) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const sections = ["home", "about", "services", "life", "contact"];

  return (
    <nav className="w-full bg-white shadow z-50 relative">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 md:py-3">

        {/* Logo */}
        <Link to="/">
          <img
            src="/vite.svg"
            alt="logo"
            className="w-16 md:w-24 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700 text-sm">

          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => handleScroll(sec)}
                className="hover:text-[#a41d24] transition capitalize"
              >
                {sec === "life" ? "Life at Mastek" : sec}
              </button>
            </li>
          ))}

          <Link to="/careers">
            <button className="bg-[#a41d24] text-white px-3 py-1.5 rounded-md hover:bg-[#8b1a20] transition text-sm">
              Careers
            </button>
          </Link>

          {/* Animated "We are Hiring" */}
          <motion.span
            className="ml-3 text-[#a41d24] font-semibold text-sm"
            animate={{ opacity: [0, 1, 0], y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            We are hiring
          </motion.span>

        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700">

            {sections.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => handleScroll(sec)}
                  className="hover:text-[#a41d24] transition capitalize"
                >
                  {sec === "life" ? "Life at Mastek" : sec}
                </button>
              </li>
            ))}

            <Link to="/careers">
              <button className="bg-[#a41d24] text-white px-5 py-2 rounded-md hover:bg-[#8b1a20] transition text-sm">
                Careers
              </button>
            </Link>

            {/* Mobile Animated "We are Hiring" */}
            <motion.span
              className="mt-2 text-[#a41d24] font-semibold text-sm"
              animate={{ opacity: [0, 1, 0], y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              We are hiring
            </motion.span>

          </ul>

        </div>
      )}

    </nav>
  );
}