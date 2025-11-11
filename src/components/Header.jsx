"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Skills", to: "skills" },
  { name: "About", to: "about" },
  { name: "Contact", to: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-4 left-0 w-full z-50 pointer-events-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="glass rounded-xl flex items-center justify-between py-3 px-4 md:px-6 shadow-xl border border-white/5">
          <div className="flex items-center gap-3">
            <h1 className="text-lg md:text-2xl font-semibold tracking-tight text-white">Bekzod</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-white/90">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass="text-blue-400"
                className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a href="/Bekzod_Rahimjonov_fullstack_rezyume.pdf" className="ml-4 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md text-sm shadow-md hover:opacity-95">Resume</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-white/90">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`md:hidden mt-3 transition-all ${isOpen ? "max-h-60" : "max-h-0 overflow-hidden"}`}>
          <div className="glass rounded-lg p-4">
            <nav className="flex flex-col items-start gap-3 font-medium text-white/95">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 px-3 rounded hover:bg-white/3 transition"
                >
                  {link.name}
                </Link>
              ))}
              <a href="/Bekzod_Rahimjonov_fullstack_rezyume.pdf" className="mt-2 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md text-sm shadow-md">Resume</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
