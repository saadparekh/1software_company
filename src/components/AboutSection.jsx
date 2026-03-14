import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaRocket, FaChartLine } from "react-icons/fa";

export default function AboutSection() {

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <section id="about" className="py-28 px-6 bg-[#1f1f1f] text-white min-h-screen">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-16">

        {/* LEFT: Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#a41d24]">
            About Mastek
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            Mastek Innovations provides modern digital solutions including
            web development, scalable software systems, and cloud platforms
            that help businesses grow faster. We combine creativity, technical
            expertise, and innovation to deliver solutions that scale with your business.
          </p>
        </motion.div>

        {/* RIGHT: Feature Cards */}
        <div className="md:w-1/2 grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="bg-[#a41d24] text-white p-6 rounded-2xl border border-red-700 hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <FaCode className="text-3xl mb-4"/>
            <h3 className="font-bold text-lg mb-2">Clean Engineering</h3>
            <p className="text-gray-200 text-sm">
              Maintainable and scalable systems built with modern standards.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="bg-[#a41d24] text-white p-6 rounded-2xl border border-red-700 hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <FaShieldAlt className="text-3xl mb-4"/>
            <h3 className="font-bold text-lg mb-2">Security First</h3>
            <p className="text-gray-200 text-sm">
              Best security practices applied across architecture and deployment.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="bg-[#a41d24] text-white p-6 rounded-2xl border border-red-700 hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <FaRocket className="text-3xl mb-4"/>
            <h3 className="font-bold text-lg mb-2">Fast Execution</h3>
            <p className="text-gray-200 text-sm">
              Efficient delivery without compromising quality.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="bg-[#a41d24] text-white p-6 rounded-2xl border border-red-700 hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <FaChartLine className="text-3xl mb-4"/>
            <h3 className="font-bold text-lg mb-2">Long-Term Focus</h3>
            <p className="text-gray-200 text-sm">
              Solutions designed to scale with your business growth.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}