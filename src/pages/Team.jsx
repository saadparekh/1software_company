import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Team() {
  const team = [
    { name: "Saad Sohail", role: "Founder & AI Developer", img: "https://i.pravatar.cc/150?img=3" },
    { name: "Ali Khan", role: "Full Stack Engineer", img: "https://i.pravatar.cc/150?img=7" },
    { name: "Hina Malik", role: "UI/UX Designer", img: "https://i.pravatar.cc/150?img=9" },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <section className="py-20 text-center px-8">
        <h2 className="text-5xl font-bold mb-14 text-blue-400">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={i}
              className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-800 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
              />
              <h3 className="text-2xl font-semibold">{m.name}</h3>
              <p className="text-gray-400">{m.role}</p>
              <div className="flex justify-center space-x-6 mt-4 text-2xl">
                <i className="fab fa-github hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-linkedin hover:text-blue-400 cursor-pointer"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
