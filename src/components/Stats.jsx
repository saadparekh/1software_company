import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, Briefcase, CheckCircle } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      label: "Trusted clients",
      value: 150,
      icon: <CheckCircle className="w-10 h-10 text-[#a41d24]" />,
      desc: "Trusted by leading businesses for delivering reliable digital solutions.",
    },
    {
      id: 2,
      label: "Number of projects",
      value: 250,
      icon: <Briefcase className="w-10 h-10 text-[#a41d24]" />,
      desc: "Successfully completed diverse projects across various industries.",
    },
    {
      id: 3,
      label: "Number of employees",
      value: 30,
      icon: <Users className="w-10 h-10 text-[#a41d24]" />,
      desc: "A growing team of skilled and passionate professionals.",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {stat.label}
              </h3>

              {/* Counting Number with Red Color */}
              <div className="text-5xl font-black text-[#a41d24] mb-4">
                <CountUp end={stat.value} duration={3} enableScrollSpy />+
              </div>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}