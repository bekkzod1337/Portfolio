"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaLaptopCode,
  FaLanguage,
  FaTelegram,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { color } from "framer-motion";

const socialLinks = [
  {
    icon: <FaInstagram size={30} />,
    url: "https://instagram.com/bekkzod1337",
    color: "#E1306C",
    hover: "#D25E6C",
  },
  {
    icon: <FaGithub size={30} />,
    url: "https://github.com/bekkzod1337",
    color: "#333",
    hover: "#444",
  },
  {
    icon: <FaTelegram size={30} />,
    url: "https://t.me/iam_brand",
    color: "#0088cc",
    hover: "#0077bb",
  },
  {
    icon: <FaLinkedin size={30} />,
    url: "https://linkedin.com/in/bekzod-rahimjanov", // Agar mavjud bo'lsa o'zgartiring
    color: "#0A66C2",
    hover: "#004182",
  },
];

const About = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 3, md: 8 }, color: "#ffffff" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 8, color: "#ffffff" }}
      >
        About Me
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Personal Information */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              p: 4,
              bgcolor: "#1E293B",
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
              color: "#ffffff",
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Personal Information
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              I'm <strong>Bekzod</strong>, a Full Stack Developer born on{" "}
              <strong>June 23, 2007</strong> in Namangan, Uzbekistan. I’ve been
              coding and building for the past two years. I'm a proud graduate
              of <span style={{ color: "#00B5D8" }}>Najot Ta'lim</span> and{" "}
              <span style={{ color: "#00B5D8" }}>TUIT</span>.
            </Typography>

            <Divider sx={{ my: 2, bgcolor: "#334155" }} />

            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
              <FaMapMarkerAlt style={{ color: "#00B5D8", marginRight: 8 }} />
              <Link
                href="https://maps.app.goo.gl/uGBo1vtHZ96mKPABA"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#00B5D8",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                17 Jiydakapa, Uychi, Namangan
              </Link>
            </Typography>

            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <FaLaptopCode style={{ color: "#00B5D8", marginRight: 8 }} />
              Full Stack Developer
            </Typography>

            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <FaLanguage style={{ color: "#00B5D8", marginRight: 8 }} />
              English, Uzbek, Russian
            </Typography>
          </Paper>
        </Grid>

        {/* Interests */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              p: 4,
              bgcolor: "#1E293B",
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
              color: "#ffffff"
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Interests
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              I'm passionate about{" "}
              <span style={{ color: "#00B5D8" }}>3D animations</span> and building{" "}
              <span style={{ color: "#00B5D8" }}>custom PCs</span>. I enjoy
              experimenting with new technologies and creating innovative
              projects that challenge my skills.
            </Typography>
          </Paper>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              p: 4,
              bgcolor: "#1E293B",
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
              color: "#ffffff"
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", alignItems: "center", justifyContent: "center" }}>
              Social Media
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {socialLinks.map((item, idx) => (
                <IconButton
                  key={idx}
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: item.color,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      color: item.hover,
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
