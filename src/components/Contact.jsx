"use client";
import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box, CircularProgress, Paper } from "@mui/material";
import { motion } from "framer-motion";
import profileImage from "../assets/rasm.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        "https://api.telegram.org/bot7254256240:AAF7pEcsKtPTUTYvjHBvpXmprWK0BLpG0B0/sendMessage",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "5446871404",
            text:
              "Name: " +
              formData.name +
              "\nEmail: " +
              formData.email +
              "\nMessage: " +
              formData.message,
          }),
        }
      );
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent!");
    } catch (error) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Typography
            variant="h2"
            sx={{
              background: "linear-gradient(90deg, #a0d8ff, #7dd3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            Contact Me
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-around",
            gap: 6,
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Form */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <Box sx={{ flex: "0 1 45%", maxWidth: { xs: "100%", md: 560 } }}>
              <Paper
                sx={{
                  p: 5,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: 3,
                  height: "100%",
                }}
              >
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  variant="filled"
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  variant="filled"
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                />
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  variant="filled"
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                />
                <Button
                  type="submit"
                  fullWidth
                  disabled={loading}
                  sx={{
                    mt: 3,
                    py: 1.6,
                    background: "linear-gradient(90deg, aqua, #7c2adc)",
                    color: "white",
                  }}
                >
                  {loading ? <CircularProgress size={24} /> : "Send Message"}
                </Button>
              </form>
              </Paper>
            </Box>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <Box sx={{ flex: "0 1 45%", display: "flex", justifyContent: "center" }}>
              <motion.div
                style={{ width: "100%", maxWidth: 360, borderRadius: 18, overflow: "hidden", position: "relative" }}
                whileHover={{ boxShadow: "0 20px 60px rgba(59,130,246,0.3)" }}
              >
                <img src={profileImage} alt="Contact" className="img-shadow" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, borderRadius: 18 }} />
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
