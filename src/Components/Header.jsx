import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({ alignment, text , showMobile}) => {
    const isShowMobile = showMobile === true ? "flex" : "none"
  return (
    <Box
      sx={{
         // Apply the text alignment to the parent container
        marginTop: "2%",
        marginBottom: "2%",
      }}
    >
      <Typography
        sx={{
          display: {
            xs: isShowMobile, // small screens
            md: "flex", // large screens
          },
          justifyContent: alignment,
          fontFamily: "Overpass",
          color: "white",
          overflowWrap: "break-word",
          hyphens: "auto",
          overflow: 'hidden',
          fontSize: {
            xs: "3rem", // small screens
            sm: "5rem", // medium screens
            md: "7rem", // large screens
            lg: "10rem", // extra-large screens
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Header;
