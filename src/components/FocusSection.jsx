import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaRocket, FaChartLine } from "react-icons/fa";
import team from "../assets/images/team.jpg";
import analytics from "../assets/images/chart.jpg";

export default function FocusSection() {
  const features = [
    { icon: <FaCode />, title: "High-Impact Solutions", desc: "Delivering maintainable and scalable digital solutions." },
    { icon: <FaShieldAlt />, title: "Reliable Consulting", desc: "Global software consulting with trust and security." },
    { icon: <FaRocket />, title: "Workflow Automation", desc: "Automating workflows with smart systems." },
    { icon: <FaChartLine />, title: "Data Insights", desc: "Strong SEO, analytics, and growth strategies." }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT COLUMN: Content & Features Grid (Col-Span 7) */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#a41d24] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
            WE FOCUS ON
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl border-l-4 border-[#a41d24] pl-4">
            At Mastek, we combine technical expertise, innovation, and strategy to build a powerful digital ecosystem designed for business growth.
          </p>

          {/* Stacks on mobile, splits on tablet+ */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="text-[#a41d24] bg-red-50 w-12 h-12 flex items-center justify-center rounded-lg text-2xl mb-4 group-hover:bg-[#a41d24] group-hover:text-white transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Overlapping Images Frame (Col-Span 5) */}
        <motion.div
          className="lg:col-span-5 relative h-[450px] md:h-[550px] flex items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative Background Frame */}
          <div className="absolute top-10 left-10 w-72 h-72 md:w-80 md:h-80 border-8 border-red-100 rounded-2xl -z-10"></div>

          {/* Main Image (Back) */}
          <motion.div 
            className="absolute top-4 left-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={team}
              alt="team"
              className="w-64 md:w-80 h-64 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </motion.div>

          {/* Overlap Image (Front) */}
          <motion.div 
            className="absolute bottom-4 right-4 z-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={analytics}
              alt="analytics"
              className="w-56 md:w-72 h-56 md:h-72 object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}