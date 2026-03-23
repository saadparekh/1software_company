import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react"; // npm i lucide-react

const reviews = [
  {
    name: "Ali Khan",
    role: "CEO, TechCorp",
    review: "Absolutely impressed! The team delivered exactly what we needed, on time and with top quality.",
    stars: 5
  },
  {
    name: "Sara Ahmed",
    role: "Project Manager, WebSolutions",
    review: "The project management app transformed our workflow. Collaboration has never been easier!",
    stars: 5
  },
  {
    name: "Bilal Raza",
    role: "Entrepreneur",
    review: "EnterpriseX ERP is a game-changer for our business operations. Highly recommended.",
    stars: 4
  },
  {
    name: "Fatima Noor",
    role: "Marketing Head, SEOPro",
    review: "SEO Growth Engine boosted our website traffic tremendously. Great analytics and features!",
    stars: 5
  }
];

export default function CustomerReviewsSection() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play logic with pause on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#a41d24] font-bold tracking-widest text-sm uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">
            Customer <span className="text-[#a41d24]">Reviews</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#a41d24] mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonial Slider Card */}
        <div 
          className="relative min-h-[350px] md:min-h-[300px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 relative w-full"
            >
              {/* Background Decorative Quote */}
              <Quote className="absolute top-6 left-6 w-16 h-16 text-slate-50 -z-0 rotate-180" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[active].stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#a41d24] text-[#a41d24]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed italic mb-8">
                  "{reviews[active].review}"
                </p>

                {/* Author Info */}
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xl font-bold text-slate-900">{reviews[active].name}</h4>
                  <p className="text-[#a41d24] font-medium text-sm uppercase tracking-wide">
                    {reviews[active].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                i === active ? "w-10 bg-[#a41d24]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}