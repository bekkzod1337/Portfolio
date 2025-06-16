import React from "react";
import { FaMapMarkerAlt, FaLaptopCode, FaLanguage, FaTelegram, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Box, Grid, Paper, Typography, Link, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/system";

const About = () => {
  return (
    <Box sx={{ py: 3, px: 5 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 8, color: "white" }}>
        About Me
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Personal Information */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 4, bgcolor: "#1E293B", color: "white", borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Personal Information
            </Typography>
            <Typography variant="body1" paragraph>
              My name is <span style={{ fontWeight: "bold" }}>Bekzod</span>, and I was born on June 23, 2007, in Namangan, Uzbekistan. 
              I have been learning programming for the past two years. Currently, I am a graduate of{" "}
              <span style={{ color: "#00B5D8" }}>Najot Ta'lim</span> and <span style={{ color: "#00B5D8" }}>TUIT</span>.
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Google Maps Link */}
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
              <FaMapMarkerAlt style={{ color: "#00B5D8", marginRight: 8 }} />
              <Link
                href="https://maps.app.goo.gl/uGBo1vtHZ96mKPABA"
                target="_blank"
                sx={{ color: "#00B5D8", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
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
          <Paper sx={{ p: 4, bgcolor: "#1E293B", color: "white", borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Interests
            </Typography>
            <Typography variant="body1" paragraph>
              I am passionate about <span style={{ color: "#00B5D8" }}>3D animations</span> and building{" "}
              <span style={{ color: "#00B5D8" }}>custom computers</span>. Exploring new technologies and creating innovative
              projects keep me motivated.
            </Typography>
          </Paper>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 4, bgcolor: "#1E293B", color: "white", borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Social Media
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              <IconButton
                component="a"
                href="https://instagram.com/bekkzod1337"
                target="_blank"
                sx={{ color: "#E1306C", "&:hover": { color: "#D25E6C" } }}
              >
                <FaInstagram size={30} />
              </IconButton>

              <IconButton
                component="a"
                href="https://github.com/bekzod1337"
                target="_blank"
                sx={{ color: "#333", "&:hover": { color: "#444" } }}
              >
                <FaGithub size={30} />
              </IconButton>

              <IconButton
                component="a"
                href="https://t.me/iam_brand"
                target="_blank"
                sx={{ color: "#0088cc", "&:hover": { color: "#0077bb" } }}
              >
                <FaTelegram size={30} />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
