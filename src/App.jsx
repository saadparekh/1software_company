import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CareersPage from "./pages/CareersPage";

// Service pages
import DigitalMarketing from "./pages/services/DigitalMarketing";
import DesignAnimation from "./pages/services/DesignAnimation";
import WebDevelopment from "./pages/services/WebDevelopment";
import BigDataAnalysis from "./pages/services/BigDataAnalysis";
import SEOAndNetwork from "./pages/services/SEOAndNetwork";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";

export default function App() {
  return (
    <>
      {/* Top section */}
      <Topbar />
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareersPage />} />

        {/* Service Pages */}
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />

        <Route
          path="/services/design-animation"
          element={<DesignAnimation />}
        />

        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />

        <Route
          path="/services/big-data-analysis"
          element={<BigDataAnalysis />}
        />

        <Route
          path="/services/seo-and-network"
          element={<SEOAndNetwork />}
        />

        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
      </Routes>

      {/* Footer on all pages */}
      <Footer />
    </>
  );
}