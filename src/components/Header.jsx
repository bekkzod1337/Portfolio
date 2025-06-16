import React from "react";
import { Link } from "react-scroll"; // You can use react-scroll to create smooth scrolling to sections

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-80 bg-black text-white py-4 z-50">
      <nav className="container mx-auto flex justify-center space-x-6">
        <Link to="home" smooth={true} offset={-70} duration={500} className="cursor-pointer">
          Home
        </Link>
        <Link to="skills" smooth={true} offset={-70} duration={500} className="cursor-pointer">
          Skills
        </Link>
        <Link to="about" smooth={true} offset={-70} duration={500} className="cursor-pointer">
          About
        </Link>
        <Link to="contact" smooth={true} offset={-70} duration={500} className="cursor-pointer">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
