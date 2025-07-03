"use client";
import React, { useEffect, useState } from "react";
import profileImage from "../assets/rasm.jpg"; // yoki public/images/rasm.jpg
import { Button } from "@mui/material";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

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
    link.href = "/Bekzod_Rahimjonov_fullstack_rezyume.pdf"; // public/ ichiga joylashtiring
    link.download = "Bekzod_Rahimjonov_Fullstack_Rezyume.pdf";
    link.click();
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 bg-none text-white">
      {/* Profile Image */}
      <div
        className={`relative rounded-full w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 overflow-hidden 
          shadow-xl shadow-blue-500/30 border-4 border-blue-400 
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        <img
          src={profileImage}
          alt="Bekzod's Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 lg:ml-20 max-w-xl">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          transition-all duration-1000 ease-out`}
        >
          Hello, I'm <span className="text-blue-500">Bekzod</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-400 font-semibold mt-4 flex items-center gap-2">
          {text}
          <span className="animate-blink">|</span>
        </h2>

        <p
          className={`text-gray-300 mt-6 text-base sm:text-lg leading-relaxed
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          transition-all duration-1000 ease-out`}
        >
          Graduate of Najot Ta'lim & student at Tashkent University of Information Technology. I'm passionate about building modern, scalable, and creative web apps.
        </p>

        {/* Social Icons */}
        <div
          className={`flex gap-6 mt-8 text-2xl
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          transition-all duration-1000 ease-out`}
        >
          <a
            href="https://t.me/bekzod1337"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-blue-500 hover:text-blue-400 transition duration-200"
          >
            <FaTelegram />
          </a>
          <a
            href="https://instagram.com/bekkzod1337"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-500 hover:text-pink-400 transition duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/bekzod1337"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-gray-400 transition duration-200"
          >
            <FaGithub />
          </a>
        </div>

        {/* Download CV Button */}
        <div className="mt-6">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleDownload}
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
