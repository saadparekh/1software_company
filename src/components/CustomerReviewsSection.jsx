import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Ali Khan",
    role: "CEO, TechCorp",
    review: "Absolutely impressed! The team delivered exactly what we needed, on time and with top quality."
  },
  {
    name: "Sara Ahmed",
    role: "Project Manager, WebSolutions",
    review: "The project management app transformed our workflow. Collaboration has never been easier!"
  },
  {
    name: "Bilal Raza",
    role: "Entrepreneur",
    review: "EnterpriseX ERP is a game-changer for our business operations. Highly recommended."
  },
  {
    name: "Fatima Noor",
    role: "Marketing Head, SEOPro",
    review: "SEO Growth Engine boosted our website traffic tremendously. Great analytics and features!"
  }
];

export default function CustomerReviewsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % reviews.length);
    }, 5000); // change review every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#a41d24] mb-6">Customer Reviews</h2>
        <p className="text-gray-700 mb-12">See what our clients say about us</p>

        <div className="relative">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0 absolute top-0 left-0 w-full"}`}
            >
              <p className="text-gray-800 text-lg italic mb-4">"{r.review}"</p>
              <h4 className="font-semibold text-[#1f1f1f]">{r.name}</h4>
              <p className="text-gray-500 text-sm">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}