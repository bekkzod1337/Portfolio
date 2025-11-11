"use client";
import React, { useEffect, useState } from "react";
import profileImage from "../assets/4.jpg";
import { Button } from "@mui/material";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const fullText = "FullStack Developer";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    let i = 0;
    setText("");

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Bekzod_Rahimjonov_fullstack_rezyume.pdf";
    link.download = "Bekzod_Rahimjonov_Fullstack_Rezyume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 bg-none text-white gap-10 lg:gap-20 w-full">
      {/* Text Content */}
      <motion.div 
        className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">Bekzod</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-blue-300 flex items-center gap-2">
          {text}
          <span className="animate-blink">|</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-white mt-6 text-base sm:text-lg leading-relaxed">
          I build modern, scalable web applications with a focus on performance, accessibility and delightful user experiences. Currently studying at TUIT and crafting full-stack projects.
        </motion.p>

        {/* Social Icons & CTA */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mt-8">
          <div className="flex gap-4 text-2xl">
            <motion.a 
              href="https://t.me/bekzod1337" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Telegram" 
              className="text-blue-400 hover:text-blue-300 transition"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTelegram />
            </motion.a>
            <motion.a 
              href="https://instagram.com/bekkzod1337" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="text-pink-400 hover:text-pink-300 transition"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://github.com/bekzod1337" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="text-white hover:text-gray-200 transition"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
          </div>

          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="contained" 
                size="large" 
                onClick={handleDownload} 
                sx={{ 
                  textTransform: 'none', 
                  fontWeight: 700, 
                  bgcolor: 'linear-gradient(90deg,#3b82f6,#7c3aed)', 
                  boxShadow: '0 8px 30px rgba(99,102,241,0.18)',
                  transition: 'all 0.3s ease'
                }}
              >
                Download CV
              </Button>
            </motion.div>
            <motion.a 
              href="#contact" 
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/6 hover:bg-white/8 transition text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Profile Card - Right Side */}
      <motion.div 
        className="flex items-center justify-center order-first lg:order-last"
        initial={{ opacity: 0, scale: 0.8, x: 60 }}
        animate={isVisible ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 60 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div 
          className="relative rounded-2xl w-56 h-72 md:w-80 md:h-96 overflow-hidden shadow-2xl border-2 border-white/10"
          whileHover={{ boxShadow: "0 20px 60px rgba(59,130,246,0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <img src={profileImage} alt="Bekzod's Profile" className="object-cover w-full h-full img-shadow" />
          <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/20 pointer-events-none"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
