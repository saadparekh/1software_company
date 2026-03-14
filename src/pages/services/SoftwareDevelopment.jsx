import { useState, useEffect } from "react";
import { FaLaptopCode, FaCogs, FaShieldAlt, FaProjectDiagram, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import whyImg from "../../assets/services/software.jpg";
import offerImg from "../../assets/services/software-offer.jpg";

const faqs = [
  { q: "What software development services do you provide?", a: "We build custom software, web applications, and enterprise solutions tailored to your business needs." },
  { q: "Do you handle maintenance?", a: "Yes, we provide ongoing support, updates, and optimization." },
  { q: "Can you integrate third-party APIs?", a: "Absolutely, we integrate payment gateways, analytics, and other external APIs." },
  { q: "Do you follow Agile methodology?", a: "Yes, we use Agile to ensure fast delivery, adaptability, and collaboration." },
];

export default function SoftwareDevelopment() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, []);

  const whyChooseUs = [
    { icon: FaLaptopCode, title: "Custom Software", text: "Tailored software solutions to meet your unique business requirements." },
    { icon: FaCogs, title: "Agile Development", text: "Efficient project management with iterative delivery and feedback." },
    { icon: FaShieldAlt, title: "Secure & Reliable", text: "Focus on robust, secure, and maintainable software." },
    { icon: FaProjectDiagram, title: "Scalable Solutions", text: "Software designed to grow with your business needs." },
  ];

  const whatWeOffer = [
    { icon: FaLaptopCode, title: "Web Applications", text: "Responsive web apps with modern tech stacks for any business." },
    { icon: FaCogs, title: "Custom Software", text: "Desktop and enterprise software tailored for efficiency." },
    { icon: FaShieldAlt, title: "Security & Maintenance", text: "Secure software with ongoing maintenance and updates." },
    { icon: FaProjectDiagram, title: "Integration & APIs", text: "Connect with third-party APIs and existing systems seamlessly." },
  ];

  const goToContact = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 100);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-28">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-700 mb-4">Software Development</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"># Build Custom Software That Scales</p>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-4xl mx-auto">
            From web apps to enterprise solutions, we develop secure, reliable, and scalable software that meets your business goals.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <div className="mb-28 flex flex-col md:flex-row items-center gap-12">
          <motion.img src={whyImg} alt="Why Choose Us" className="w-full md:w-1/2 rounded-3xl shadow-lg object-cover" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} />
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">Why Choose Us?</h2>
            <div className="space-y-6">
              {whyChooseUs.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} className="flex items-start mb-4 md:mb-6">
                  <item.icon className="text-red-700 text-3xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">What We Offer</h2>
            <div className="space-y-6">
              {whatWeOffer.map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.03 }} className="flex items-start bg-white p-6 rounded-2xl shadow-md cursor-pointer transition">
                  <item.icon className="text-red-700 text-3xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div className="flex-1 w-full md:w-1/2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <img src={offerImg} alt="What We Offer" className="w-full rounded-3xl shadow-lg object-cover" />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-28 bg-red-50 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Free Consultation</h3>
            <p className="text-gray-700 text-base md:text-lg">Ready to grow? Let’s talk.</p>
          </div>
          <button onClick={goToContact} className="bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 hover:bg-red-800 transition text-base md:text-xl font-semibold">
            <FaRocket /> Get Started
          </button>
        </motion.div>

        {/* FAQ */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-800 text-center">FAQs</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-2xl overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold bg-gray-100 hover:bg-gray-200 transition text-base md:text-lg">
                  {faq.q}
                  <span className="text-red-700 text-xl md:text-2xl">{openIndex === idx ? "-" : "+"}</span>
                </button>
                {openIndex === idx && <div className="px-6 py-5 text-gray-700 bg-white text-sm md:text-base">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}