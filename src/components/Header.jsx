"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "About", to: "about" },
  { name: "Contact", to: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log("Audio play failed - may need user interaction first");
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-4 left-0 w-full z-50 pointer-events-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="glass rounded-xl flex items-center justify-between py-3 px-4 md:px-6 shadow-xl border border-white/5">
          <div className="flex items-center gap-3 flex-shrink-0">
            <h1 className="text-base md:text-2xl font-semibold tracking-tight text-white">Bekzod</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm text-white/90">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass="text-blue-400"
                className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Music Toggle + Mobile menu button */}
          <div className="flex items-center gap-3">
            <audio
              ref={audioRef}
              loop
              preload="none"
              src="/back.mp3"
            />
            <button
              onClick={toggleMusic}
              aria-label={isMusicPlaying ? "Pause Music" : "Play Music"}
              title={isMusicPlaying ? "Pause" : "Play"}
              className="hidden sm:flex text-white/90 p-2 rounded-md hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {isMusicPlaying ? <FaVolumeUp size={18} /> : <FaVolumeMute size={18} />}
            </button>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
                className="text-white/90 p-2 -mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden mt-3 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        >
          <div className="glass rounded-lg p-3">
            <nav className="flex flex-col items-stretch gap-2 font-medium text-white/95" role="navigation" aria-label="Mobile">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left py-3 px-3 rounded hover:bg-white/6 transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
