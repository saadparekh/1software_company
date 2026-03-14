import { motion } from "framer-motion";

export default function AppointmentSection() {
  return (
    <section id="contact" className="bg-[#1f1f1f] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#a41d24]">
            Book an Appointment
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Need consultation for your project? Speak with our experts and
            get the best digital solutions tailored to your business.
          </p>

          <div className="space-y-3 text-lg">
            <p>
              📞{" "}
              <a
                href="tel:+923312281979"
                className="text-[#a41d24] hover:underline"
              >
                0331-2281979
              </a>
            </p>

            <p>
              ✉️{" "}
              <a
                href="mailto:info@mastek.tech"
                className="text-[#a41d24] hover:underline"
              >
                themastek.co@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3 text-[#a41d24]">
              Best Fit Projects
            </h3>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Marketing & Business Websites</li>
              <li>Dashboards & Internal Tools</li>
              <li>Product UI & System Upgrades</li>
            </ul>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-5 bg-[#111] p-10 rounded-2xl shadow-2xl border border-gray-800"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-[#1f1f1f] text-white border border-gray-700 focus:border-[#a41d24] focus:ring focus:ring-[#a41d24]/30 outline-none transition"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg bg-[#1f1f1f] text-white border border-gray-700 focus:border-[#a41d24] focus:ring focus:ring-[#a41d24]/30 outline-none transition"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-4 rounded-lg bg-[#1f1f1f] text-white border border-gray-700 focus:border-[#a41d24] focus:ring focus:ring-[#a41d24]/30 outline-none transition"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows="4"
            className="w-full p-4 rounded-lg bg-[#1f1f1f] text-white border border-gray-700 focus:border-[#a41d24] focus:ring focus:ring-[#a41d24]/30 outline-none transition"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#a41d24] hover:bg-[#8b1a20] text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Book Appointment
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}