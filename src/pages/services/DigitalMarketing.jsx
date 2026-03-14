import { useState, useEffect } from "react";
import {
  FaSearch,
  FaFacebook,
  FaGoogle,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import whyImg from "../../assets/services/dig-why-choose-us.jpg";
import offerImg from "../../assets/services/dig-what-we-offer.jpg";
9
const faqs = [
  {
    q: "What is digital marketing?",
    a: "Digital marketing uses online channels like SEO, social media, and ads to grow your business and reach the right audience efficiently.",
  },
  {
    q: "Which platforms do you cover?",
    a: "We manage campaigns on Google, Facebook, Instagram, TikTok, and LinkedIn depending on your target audience.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes! Our team optimizes your website for search engines to increase visibility, drive traffic, and improve conversions.",
  },
  {
    q: "Can you run ad campaigns?",
    a: "Absolutely. We create targeted Google Ads and Social Media Ads campaigns to maximize ROI.",
  },
];

export default function DigitalMarketing() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const whyChooseUs = [
    { icon: FaSearch, title: "SEO Optimization", text: "Rank higher on Google with effective SEO strategies that drive traffic." },
    { icon: FaFacebook, title: "Social Media Marketing", text: "Engage your audience with Facebook, Instagram, and TikTok campaigns." },
    { icon: FaGoogle, title: "Google Ads Campaigns", text: "Targeted ad campaigns that convert visitors into paying customers." },
    { icon: FaPalette, title: "Brand Development", text: "Build a strong brand identity that resonates and drives loyalty." },
  ];

  const whatWeOffer = [
    { icon: FaSearch, title: "SEO", text: "Optimize your website for search engines to increase visibility, drive traffic, and boost conversions." },
    { icon: FaFacebook, title: "Social Media Marketing", text: "Manage campaigns on Facebook, Instagram, and TikTok to engage your audience and grow your brand." },
    { icon: FaGoogle, title: "Google Ads", text: "Run high ROI campaigns with targeted ads that convert visitors into paying customers." },
    { icon: FaPalette, title: "Brand Development", text: "Build a strong brand identity that stands out, resonates with your audience, and drives loyalty." },
  ];

  const goToContact = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-28">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-700 mb-4">Digital Marketing</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"># Digital Marketing Agency in WorldWide That Delivers Real Growth</p>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-4xl mx-auto">
            From SEO to Social Media, we help you reach the right audience, build your brand, and grow fast with measurable results.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <div className="mb-28 flex flex-col md:flex-row items-center gap-12">
          <motion.img
            src={whyImg}
            alt="Why Choose Us"
            className="w-full md:w-1/2 rounded-3xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
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
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold bg-gray-100 hover:bg-gray-200 transition text-base md:text-lg"
                >
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