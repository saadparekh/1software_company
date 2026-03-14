import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll when hash exists
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
    <nav className="w-full bg-white shadow">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <img src="/vite.svg" alt="logo" className="w-28" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 text-sm">

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
            <button className="bg-[#a41d24] text-white px-4 py-2 rounded-md hover:bg-[#8b1a20] transition">
              Careers
            </button>
          </Link>

        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700">

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
              <button className="bg-[#a41d24] text-white px-6 py-2 rounded-md hover:bg-[#8b1a20] transition">
                Careers
              </button>
            </Link>

          </ul>

        </div>
      )}

    </nav>
  );
}