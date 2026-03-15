import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    visible && (
      <button
        onClick={scrollToHero}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-[#a41d24] text-white shadow-lg hover:bg-[#8b1a20] transition"
        aria-label="Back to Hero"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}