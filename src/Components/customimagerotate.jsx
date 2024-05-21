import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import yellowcircle from "../icons/circleyellow.png"

// Define the keyframes for the rotation animation
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Create a styled component that applies the rotation animation
const RotatingImage = styled(Box)`
  display: inline-block;
  animation: ${rotate360} 10s linear infinite;
`;

// Custom Image Component
const CustomRotatingImage = ({isMobile}) => {
  return (
    <Box 
    sx={{  display: { xs: isMobile ? "flex" : "none", md: isMobile ? "none"  : "flex" } }}>
        <RotatingImage
        
          component="img"
          src={yellowcircle}
          alt="Harry"
          sx={{
            width: '20px',
            height: '20px',
            marginRight: '30px'
          }}
        />

    </Box>
  );
};

export default CustomRotatingImage;