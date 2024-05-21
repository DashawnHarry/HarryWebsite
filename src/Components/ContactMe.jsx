import React, { useState } from "react";
import { Box, Button, Container, Paper, TextField } from "@mui/material";
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    to_name: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_plju04b', // Replace with your EmailJS service ID
      'template_j9l5ieb', // Replace with your EmailJS template ID
      formData,
      'IGmp6aBQDDvoIJago' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
  };

  return (
    <Container id="contact-section" sx={{ mt: 8, mb: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          fontFamily: 'Overpass',
          color: "white"
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
            }}
            sx={{ fontFamily: 'Overpass', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }}
          />
          <TextField
            label="Email"
            name="reply_to"
            type="email"
            value={formData.reply_to}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
            }}
            sx={{ fontFamily: 'Overpass', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
            }}
            sx={{ fontFamily: 'Overpass', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontFamily: 'Overpass' }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactMe;
