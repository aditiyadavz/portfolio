import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

// Layout
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Coding from "./sections/Coding";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Preloader */}
      <Preloader isLoading={loading} />

      {/* Animated background */}
      <Background />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Main layout */}
      <div className="relative min-h-screen">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Coding />
          <Services />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
