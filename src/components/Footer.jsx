import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Mastek</h3>
          <p className="text-sm leading-6">
            Mastek delivers innovative digital solutions including software
            development, web platforms, digital marketing, and IT infrastructure
            to help businesses grow in the digital world.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Digital Marketing", "/services/digital-marketing"],
              ["Design & Animation", "/services/design-animation"],
              ["Web Development", "/services/web-development"],
              ["Software Development", "/services/software-development"],
              ["Big Data Analysis", "/services/big-data-analysis"],
              ["SEO & Network Services", "/services/seo-and-network"]
            ].map(([name, link]) => (
              <li key={name} className="flex items-center gap-2">
                <FaArrowRight className="text-[#a41d24] text-xs" />
                <Link to={link} className="hover:text-[#a41d24] transition">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaArrowRight className="text-[#a41d24] text-xs" />
              <Link to="/" className="hover:text-[#a41d24] transition">Home</Link>
            </li>

            <li className="flex items-center gap-2">
              <FaArrowRight className="text-[#a41d24] text-xs" />
              <a href="/#about" className="hover:text-[#a41d24] transition">About</a>
            </li>

            <li className="flex items-center gap-2">
              <FaArrowRight className="text-[#a41d24] text-xs" />
              <a href="/#services" className="hover:text-[#a41d24] transition">Services</a>
            </li>

            <li className="flex items-center gap-2">
              <FaArrowRight className="text-[#a41d24] text-xs" />
              <a href="/#contact" className="hover:text-[#a41d24] transition">Contact</a>
            </li>

            <li className="flex items-center gap-2">
              <FaArrowRight className="text-[#a41d24] text-xs" />
              <Link to="/careers" className="hover:text-[#a41d24] transition">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FaPhone className="text-[#a41d24]" /> 0319-8548849
            </p>

            <p className="flex items-center gap-3 break-all">
              <FaEnvelope className="text-[#a41d24]" /> themastek.co@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#a41d24]" /> New York, US
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61586228103473" target="_blank" rel="noopener noreferrer" className="text-[#a41d24] hover:text-white transition">
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/mastekinnovations/" target="_blank" rel="noopener noreferrer" className="text-[#a41d24] hover:text-white transition">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/mastek-innovations-3691533b5/" target="_blank" rel="noopener noreferrer" className="text-[#a41d24] hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © 2026 <span className="text-white font-semibold">Mastek</span>. All rights reserved.
      </div>
    </footer>
  );
}