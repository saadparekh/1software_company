import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FocusSection from "../components/FocusSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import CustomerReviewsSection from "../components/CustomerReviewsSection";
import LocationSection from "../components/LocationSection";
import AppointmentSection from "../components/AppointmentSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <FocusSection />
      <ProjectsSection />
      <CustomerReviewsSection />
      <LocationSection />
      <AppointmentSection />
      <BackToTop />
    </div>
  );
}