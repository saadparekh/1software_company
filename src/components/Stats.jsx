import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: 250, label: "Projects Completed" },
    { value: 120, label: "Happy Clients" },
    { value: 15, label: "Expert Team" },
    { value: 5, label: "Years Experience" },
  ];

  return (
    <section className="py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#1f1f1f] mb-16">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:i * 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-5xl font-bold text-[#a41d24]">
                <CountUp end={stat.value} duration={3} />+
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}