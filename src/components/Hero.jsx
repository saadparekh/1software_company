import { motion } from "framer-motion";

export default function Hero() {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center min-h-screen px-6 bg-gray-900 text-white overflow-hidden"
    >

      {/* red glow background */}
      <div className="absolute w-[400px] h-[400px] bg-[#a41d24]/30 blur-[120px] rounded-full top-[-120px] left-[-120px]"></div>

      <div className="max-w-5xl mx-auto relative z-10 pt-20">

        {/* Heading */}
        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          COMPLETE IT & SOFTWARE
          <span className="block text-[#a41d24] mt-2">
            SOLUTIONS FOR MODERN BUSINESSES
          </span>
        </motion.h1>

        {/* Text */}
        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.5 }}
          className="text-gray-300 mt-8 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Mastek provides powerful software development, web solutions,
          digital marketing and enterprise technology services to
          accelerate your business growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.8 }}
          className="flex justify-center gap-6 mt-12 flex-wrap"
        >

          <motion.a
            href="#about"
            whileHover={{ scale:1.05 }}
            className="bg-[#a41d24] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8b1a20] transition"
          >
            Learn More
          </motion.a>

          <motion.button
            whileHover={{ scale:1.05 }}
            onClick={scrollToContact}
            className="bg-white text-[#a41d24] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            Start a Project
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}