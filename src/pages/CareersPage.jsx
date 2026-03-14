import hero from "../assets/images/career-bg.jpg";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="bg-[#f9f9f9]">

      {/* HERO */}
      <section
        className="relative w-full h-[420px] md:h-[500px] lg:h-[560px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        >
          Careers At <span className="text-[#a41d24]">Mastek</span>
        </motion.h1>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-24 text-center max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest text-[#a41d24] font-bold mb-14"
        >
          OUR HIRING PROCESS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="bg-[#a41d24] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6">
              01
            </div>

            <h3 className="font-semibold mb-3 text-lg">Application</h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Submit your application through our official website
              along with your resume and portfolio.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-10 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="bg-[#a41d24] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6">
              02
            </div>

            <h3 className="font-semibold mb-3 text-lg">Interview</h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Our recruitment team evaluates your skills,
              experience, and ability to solve real problems.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white p-10 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="bg-[#a41d24] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6">
              03
            </div>

            <h3 className="font-semibold mb-3 text-lg">Offer Placement</h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Successful candidates receive an official
              offer to join the Mastek team.
            </p>
          </motion.div>

        </div>
      </section>

      {/* APPLY FORM */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-4xl mx-auto shadow-xl rounded-2xl p-12 border">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#a41d24] font-bold tracking-widest mb-10 text-center"
          >
            APPLY FOR A POSITION
          </motion.h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="First Name"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a41d24]"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a41d24]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a41d24]"
            />

            <input
              type="text"
              placeholder="Contact Number"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a41d24]"
            />

            <select className="border p-3 rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#a41d24]">
              <option>Select Position</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>UI/UX Designer</option>
              <option>Data Analyst</option>
            </select>

            <input
              type="file"
              className="border p-3 rounded-lg md:col-span-2"
            />

            <textarea
              placeholder="Tell us about yourself..."
              rows="4"
              className="border p-3 rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#a41d24]"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#a41d24] text-white py-3 rounded-lg md:col-span-2 hover:bg-[#8b1a20] transition font-semibold"
            >
              Submit Application
            </motion.button>

          </form>

        </div>

      </section>

    </div>
  );
}