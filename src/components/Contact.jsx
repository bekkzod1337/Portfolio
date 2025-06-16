import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Container, Box, CircularProgress } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const BOT_TOKEN = "7254256240:AAF7pEcsKtPTUTYvjHBvpXmprWK0BLpG0B0"; 
  const CHAT_ID = 5446871404;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `
<b>New Contact Message</b>\n
<b>Name:</b> ${formData.name}\n
<b>Email:</b> ${formData.email}\n
<b>Message:</b> ${formData.message}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });

      alert("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="white"
        mb={5}
        sx={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease",
        }}
      >
        Contact Me
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        bgcolor="#1E293B"
        p={4}
        borderRadius={3}
        boxShadow={5}
        sx={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease",
        }}
      >
        <TextField
          label="Name"
          variant="filled"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: '#ccc' },
          }}
        />

        <TextField
          label="Email"
          type="email"
          variant="filled"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: '#ccc' },
          }}
        />

        <TextField
          label="Message"
          multiline
          rows={4}
          variant="filled"
          fullWidth
          margin="normal"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: '#ccc' },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
