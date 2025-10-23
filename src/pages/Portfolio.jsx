import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    { title: "AI Resume Analyzer", img: "https://images.unsplash.com/photo-1532619187603-d7d8e5f9c9f1" },
    { title: "Complaint Tracking System", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61" },
    { title: "Resource Allocation Tool", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <section className="py-20 px-8 text-center">
        <h2 className="text-5xl font-bold text-blue-400 mb-14">Our Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-900 transform hover:-translate-y-2 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{p.title}</h3>
                <p className="text-gray-400">AI-powered and full-stack projects designed for scalability and impact.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
