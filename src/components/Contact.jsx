"use client";
import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box, CircularProgress, Paper, Alert } from "@mui/material";
import { motion } from "framer-motion";
import profileImage from "../assets/rasm.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => setNotification({ show: false, type: "", message: "" }), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showNotification("error", "Please fill in all fields correctly");
      return;
    }
    
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
      showNotification("success", "Message sent successfully! ✓");
    } catch (error) {
      showNotification("error", "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
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
          style={{ textAlign: "center", marginBottom: "2rem", display: "flex", justifyContent: "center" }}
        >
          <Paper
            sx={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.04)",
              borderRadius: 3,
              p: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                background: "linear-gradient(90deg, #a0d8ff, #7dd3fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3.5rem" },
              }}
            >
              Contact Me
            </Typography>
          </Paper>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-around",
            gap: { xs: 4, md: 6 },
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
                  p: { xs: 3, sm: 4, md: 5 },
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: 3,
                  height: "100%",
                }}
              >
              {notification.show && (
                <Alert 
                  severity={notification.type}
                  sx={{ mb: 2, background: "rgba(255,255,255,0.05)", border: "1px solid" }}
                >
                  {notification.message}
                </Alert>
              )}
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
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                  FormHelperTextProps={{ style: { color: "#ff4757" } }}
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
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                  FormHelperTextProps={{ style: { color: "#ff4757" } }}
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
                  error={!!errors.message}
                  helperText={errors.message}
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                  FormHelperTextProps={{ style: { color: "#ff4757" } }}
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
                style={{ 
                  width: "100%", 
                  maxWidth: 360, 
                  borderRadius: 18, 
                  overflow: "hidden", 
                  position: "relative",
                  boxShadow: "0 20px 60px rgba(59,130,246,0.3)"
                }}
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
