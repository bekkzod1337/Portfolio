"use client";
import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ThreeBackground from "./components/Background";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
  <div className="font-sans scroll-smooth antialiased">
      <Analytics />

      {/* Background 3D Layer */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <ThreeBackground />
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen text-white"
          >
            <main className="relative z-10">
            <Header />

            {/* Main Sections with Scroll Animations */}
            <motion.section 
              id="home" 
              className="min-h-screen flex items-center pt-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Home />
            </motion.section>

            <motion.section 
              className="min-h-screen flex items-center pt-2"
              initial={{ opacity: 1, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Skills />
            </motion.section>

            <motion.section 
              id="about" 
              className="min-h-screen flex items-center pt-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <About />
            </motion.section>

            <motion.section 
              id="contact" 
              className="min-h-screen flex items-center pt-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Contact />
            </motion.section>

            {/* Footer */}
            <footer className="mt-20">
              <Footer />
            </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
