import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function MovingCube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* Intro */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg"
        >
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-blue-500">Codexa</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            We create stunning digital solutions powered by AI, design, and code.
          </p>
          <button className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700 transition text-lg">
            Get Started
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[400px] h-[300px]"
        >
          <Canvas camera={{ position: [3, 3, 3] }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <MovingCube />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </motion.div>
      </section>

      {/* About */}
      <section className="bg-slate-900 py-20 text-center px-8">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-300 text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Codexa is a full-service tech startup specializing in Web Development,
          AI-powered systems, and Software Design. We turn ideas into real,
          scalable products.
        </motion.p>
      </section>

      {/* Services */}
      <section className="bg-slate-950 py-20 text-center px-8">
        <h2 className="text-4xl font-bold mb-14">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Web Development",
              desc: "Modern, responsive web apps built with React & Node.js.",
            },
            {
              title: "AI Solutions",
              desc: "Intelligent automation and data-driven products.",
            },
            {
              title: "UI/UX Design",
              desc: "Beautiful interfaces and seamless user experiences.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="bg-slate-900 p-8 rounded-2xl hover:shadow-xl hover:shadow-blue-900 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                {s.title}
              </h3>
              <p className="text-gray-300 text-md">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
