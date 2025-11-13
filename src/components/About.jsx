"use client";
import React from "react";
import {
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";
import { Box, Typography, Grid, Paper, Chip, Divider, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "TailwindCSS",
  "Firebase",
];

const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Completed Projects", value: "15+" },
  { label: "Clients", value: "10+" },
];

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/bekkzod1337", color: "#333" },
  { icon: <FaTelegram />, url: "https://t.me/iam_brand", color: "#0088cc" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/bekzod-rahimjanov", color: "#0A66C2" },
  { icon: <FaInstagram />, url: "https://instagram.com/bekkzod1337", color: "#E1306C" },
];

const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 10 },
        
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mb-6 md:mb-8"
      >
        <Box className="glass rounded-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 shadow-xl" sx={{ border: "1px solid rgba(255,255,255,0.05)" }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #a0d8ff, #7dd3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            About Me
          </Typography>
        </Box>
      </motion.div>

      {/* Content */}
      <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center" justifyContent="space-around">
        {/* Left Section — Image & Info */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                textAlign: "center",
                bgcolor: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.04)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                width: { xs: "100%", sm: "100%" },
                mx: "auto",
              }}
              elevation={0}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: { xs: 3, md: 10 } }}>
                <Avatar
                  alt="Bekzod"
                  src="/3.jpg"
                  sx={{
                    width: { xs: 200, sm: 250, md: 300 },
                    height: { xs: 250, sm: 300, md: 400 },
                    border: "3px solid #00B5D8",
                    borderRadius: 3,
                    boxShadow: '0 22px 50px rgba(2,6,23,0.7), 0 8px 20px rgba(59,130,246,0.16)'
                  }}
                />

                <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, maxWidth: { xs: '100%', sm: 360 } }}>
                  <Typography variant="h5" color="white" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Bekzod Rahimjanov
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 2, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                    Full Stack Developer
                  </Typography>
                  <Typography variant="body1" color="#a0d8ff" sx={{ lineHeight: 1.8, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                    I was born on June 23, 2007 in Namangan region. I am a graduate of Najot
Education and TUIT. For the past 2 years
I have been developing professional web projects.
                  </Typography>

                  <Divider sx={{ my: 2, md: { my: 3 }, bgcolor: "#334155" }} />

                  <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 2 }}>
                    {socialLinks.map((item, i) => (
                      <motion.a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        style={{ color: item.color, fontSize: 22 }}
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* Right Section — Skills & Stats */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                bgcolor: "rgba(255,255,255,0.03)",
                borderRadius: 4,
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.04)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
              elevation={0}
            >
              <Typography variant="h6" fontWeight="bold" color="white" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                What I Do
              </Typography>
              <Typography variant="body1" color="#a0d8ff" sx={{ lineHeight: 1.8, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                I create modern, fast, and user-friendly web applications. I combine Frontend and Backend technologies to develop complete systems that deliver excellent results.
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" fontWeight="bold" color="white" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Tech Stack
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {techStack.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.05)",
                        color: "#a0d8ff",
                        border: "1px solid rgba(160,216,255,0.3)",
                        fontWeight: "bold",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Divider sx={{ my: 3, md: { my: 4 }, bgcolor: "#334155" }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: "space-around",
                  textAlign: "center",
                  gap: 2,
                }}
              >
                {stats.map((stat, i) => (
                  <Box key={i} sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#38BDF8",
                        fontWeight: "bold",
                        fontSize: { xs: '1.5rem', md: '1.875rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ffffff", fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
