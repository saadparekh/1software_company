import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaBullhorn, FaPaintBrush, FaCode, FaDatabase, FaNetworkWired, FaLaptopCode } from "react-icons/fa";

import digital from "../assets/services/digital.jpg";
import design from "../assets/services/design.jpg";
import web from "../assets/services/web.jpg";
import data from "../assets/services/data.jpg";
import network from "../assets/services/network.jpg";
import software from "../assets/services/software.jpg";

const services = [
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing",
    icon: <FaBullhorn />,
    image: digital,
  },
  {
    name: "Design & Animation",
    path: "/services/design-animation",
    icon: <FaPaintBrush />,
    image: design,
  },
  {
    name: "Web Development",
    path: "/services/web-development",
    icon: <FaCode />,
    image: web,
  },
  {
    name: "Big Data Analysis",
    path: "/services/big-data-analysis",
    icon: <FaDatabase />,
    image: data,
  },
  {
    name: "SEO & Network Services",
    path: "/services/seo-and-network",
    icon: <FaNetworkWired />,
    image: network,
  },
  {
    name: "Software Development",
    path: "/services/software-development",
    icon: <FaLaptopCode />,
    image: software,
  },
];


export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#f9f9f9] px-6">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-20 text-[#1f1f1f]">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {services.map((service, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="group relative h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          >

            {/* Background Image */}
            <img
              src={service.image}
              className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
              {/* Icon */}
              <div className="text-4xl text-[#a41d24] mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#1f1f1f] group-hover:text-white mb-4 transition">
                {service.name}
              </h3>

              <p className="text-gray-500 group-hover:text-gray-200 text-sm mb-8 transition">
                Professional solutions designed to improve business efficiency
                and accelerate digital transformation.
              </p>

              <Link
                to={service.path}
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-[#8b1a20] hover:text-white transition"
              >
                + Read More
              </Link>

            </div>

          </motion.div>

        ))}
      </div>
    </section>
  );
}