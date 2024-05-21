import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const AboutMe = () => {
  return (
    <Container id="about-section" sx={{ mt: 8, mb: 8 }}>
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
          color: 'white'
        }}
      >
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Overpass' }}>
           I am Harry Flint Flex Dashawn, a passionate artist with diverse talents in music, photography, and modeling. My journey into the world of creativity began in 2016 and has blossomed into a fulfilling career.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, fontFamily: 'Overpass' }}>
          Modeling Skills
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Overpass' }}>
          As a model, I bring versatility and professionalism to every shoot. My experience spans various genres, and I thrive in front of the camera!
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, fontFamily: 'Overpass' }}>
          Photography Skills
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Overpass' }}>
          Photography allows me to capture the beauty of the world around us. With a keen eye for detail and composition, I create stunning visuals that tell compelling stories. My portfolio includes a wide range of styles and subjects.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, fontFamily: 'Overpass' }}>
          Creative Music Skills
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Overpass' }}>
          Music has always been a core part of my life. I specialize in creating captivating melodies and producing high-quality tracks that resonate with my audience. My music is an expression of my soul and creativity.
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 4, fontFamily: 'Overpass' }}>
          Since 2016, I have honed my skills in photography, music production, video and photo editing, and self-modeling. Each of these disciplines allows me to express my creativity in unique and fulfilling ways.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutMe;