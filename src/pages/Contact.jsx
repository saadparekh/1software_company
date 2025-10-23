import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <section className="py-20 px-8 text-center">
        <h2 className="text-5xl font-bold text-blue-400 mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.form
            className="bg-slate-900 p-8 rounded-2xl space-y-5 text-left shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
            <textarea rows="5" placeholder="Your Message" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg">
              Send Message
            </button>
          </motion.form>

          <motion.div
            className="bg-slate-900 p-8 rounded-2xl text-left shadow-md space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-4">
              Let’s collaborate on your next AI or Web project — we’ll make it awesome.
            </p>
            <p><i className="fa-solid fa-envelope text-blue-500 mr-3"></i> contact@codexa.tech</p>
            <p><i className="fa-solid fa-phone text-blue-500 mr-3"></i> +92 300 1234567</p>
            <p><i className="fa-solid fa-location-dot text-blue-500 mr-3"></i> Karachi, Pakistan</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
