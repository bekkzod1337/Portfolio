"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaUikit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiNextui,
  SiDaisyui,
  SiSocketdotio,
  SiMaterialdesign,
} from "react-icons/si";
import {
  Audiophile,
  Aura,
  Aymood,
  Background,
  Boldo,
  Card,
  Coffee,
  Countries,
  Gummi,
  Herculas,
  Hercules,
  Lamborghini,
  Reaction,
  Resonance,
  Telegram,
  Youtube,
} from "../images";

const projects = [
  {
    name: "Lamborghini",
    category: "Demo Project",
    image: Lamborghini,
    demoLink: "https://bekzod-lamborghini.vercel.app/",
    githubLink: "https://github.com/bekkzod1337/Lamborghini-NEXT.git",
  },
  {
    name: "Hercules",
    category: "Real Project, TeamWork",
    image: Hercules,
    demoLink: "https://www.hercules.uz/ru",
    githubLink: "github.com/",
  },
  {
    name: "Resonance",
    category: "Figma Project",
    image: Resonance,
    demoLink: "https://resonance-bekzod.vercel.app/",
    githubLink: "https://github.com/bekkzod1337/resonance-NEXT.git",
  },
  {
    name: "Reaction testing",
    category: "Demo Project",
    image: Reaction,
    demoLink: "https://reaction-bekzod.vercel.app/",
    githubLink: "https://github.com/bekkzod1337/Reaction-NEXT.git",
  },
  {
    name: "Rest-Countries",
    category: "Figma Project",
    image: Countries,
    demoLink: "https://rest-countries-bekzod.vercel.app/",
    githubLink: "https://github.com/bekkzod1337/rest-countries-NEXT.git",
  },
  {
    name: "Gummi Shopify",
    category: "Figma Project",
    image: Gummi,
    demoLink: "https://gummi-shopify-bekzod.vercel.app/",
    githubLink: "https://github.com/bekkzod1337/Gummi-Shopify-VITE.git",
  },
  {
    name: "AURA MOOD",
    category: "Demo Project",
    image: Aura,
    demoLink: "https://aura-bekzod.vercel.app/",
    githubLink: "https://github.com/bekkzod1337/aura-bekzod-NEXT.git",
  },
  {
    name: "Telegram clone",
    category: "Demo Project",
    image: Telegram,
    demoLink: "https://telegram-clone-bekzod.vercel.app/",
    githubLink: "https://github.com/bekkzod1337/telegram-clone.git",
  },
  {
    name: "Coffee Shop",
    category: "Figma Project",
    image: Coffee,
    demoLink: "https://coffee-shop-bekzod.vercel.app/",
    githubLink: "https://github.com/bekkzod1337/Coffee-Shop-NEXT.git",
  },
  {
    name: "Boldo",
    category: "Teamwork, Figma Project",
    image: Boldo,
    demoLink: "https://boldo-figma.vercel.app/",
    githubLink: "https://github.com/mrphoenixUz/Boldo---Figma.git",
  },
  {
    name: "Youtube clone",
    category: "Demo Project",
    image: Youtube,
    demoLink: "https://bekzod-bektube.vercel.app/",
    githubLink: "https://github.com/bekzod1337/youtube-clone.git",
  },
  {
    name: "Beautiful Background",
    category: "Demo Project",
    image: Background,
    demoLink: "https://bekzod-background.vercel.app/",
    githubLink: "https://github.com/bekzod1337/Background.git",
  },
  {
    name: "Card Generator",
    category: "Demo Project",
    image: Card,
    demoLink: "https://bekzod-card-generator.vercel.app/",
    githubLink: "https://github.com/bekzod1337/Card-generator.git",
  },
  {
    name: "Audiophile",
    category: "Demo Project",
    image: Audiophile,
    demoLink: "https://bekzod-audiophile.vercel.app/",
    githubLink: "https://github.com/bekzod1337/audiophile.git",
  },
];

const skills = [
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextui />, color: "text-cyan-500" },
  { name: "MUI", icon: <SiMaterialdesign />, color: "text-orange-500" },
  { name: "DaisyUI", icon: <SiDaisyui />, color: "text-cyan-400" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-purple-500" },
];

const Skills = () => {
  return (
    <div className="py-20 px-6 md:px-20 bg-none" id="projects">
      {/* Projects Section */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:border-white/20 group"
          >
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-300 img-shadow"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="text-sm text-blue-300/80">{project.category}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md text-white hover:opacity-90 transition font-medium"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-white/20 rounded-md text-white hover:bg-white/5 transition font-medium"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <motion.h2
        id="skills"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mt-24 mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300"
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`text-5xl p-6 rounded-xl glass ${skill.color} shadow-lg hover:shadow-xl transition-shadow`}
            >
              {skill.icon}
            </motion.div>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="mt-2 text-lg font-medium text-white"
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
