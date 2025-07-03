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
    <header className="fixed top-0 left-0 w-full bg-none text-white py-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <h1 className="text-2xl font-bold text-blue-400">Bekzod</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-blue-400 border-b-2 border-blue-400"
              spy={true}
              className="cursor-pointer hover:text-blue-400 transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#0f172a] py-6 md:hidden shadow-lg">
            <nav className="flex flex-col items-center space-y-6 font-medium">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-blue-400 transition duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
