import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import { Analytics } from "@vercel/analytics/react";
import ThreeBackground from "./components/Background";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="relative">
      <Analytics />
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <ThreeBackground />
      </div>

      <div className="relative min-h-screen text-white">
        <Header />

        {/* Homepage (first section) */}
        <section id="home" className="min-h-screen pt-0"> 
          <Home />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen pt-20">
          <Skills />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen pt-20">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen pt-20">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
