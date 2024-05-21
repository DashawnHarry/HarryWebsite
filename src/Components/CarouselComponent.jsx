import React, { useState } from "react";
import { Box, Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CustomScrollbar.css"; // Import custom scrollbar CSS
import { importImages, importVideos } from "../helpers/importHelpers"; // Import helper functions

const CarouselComponent = ({ type, srcLocation }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  let content;
  if (type === "images") {
    content = importImages(srcLocation);
  } else if (type === "videos") {
    content = importVideos(srcLocation);
  } else {
    throw new Error("Invalid content type");
  }

  const contentKeys = Object.keys(content);

  const itemsPerGroup = isMobile ? 2 : 4;
  const groupedContent = [];
  for (let i = 0; i < contentKeys.length; i += itemsPerGroup) {
    groupedContent.push(contentKeys.slice(i, i + itemsPerGroup));
  }

  const [open, setOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleClickOpen = (src) => {
    setSelectedContent(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedContent(null);
  };

  return (
    <div>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        centerMode={true}
      >
        {groupedContent.map((group, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            {group.map((key, subIndex) => (
              <div
                key={subIndex}
                style={{ flex: "1 0 50%", padding: "5px" }}
                onClick={() => handleClickOpen(content[key])}
              >
                {type === 'videos' ? (
                  <video
                    src={content[key]}
                    style={{
                      width: "100%",
                      height: isMobile ? "200px" : "500px", // Adjust height based on screen size
                      objectFit: "cover", // Ensure videos cover the container without distortion
                      cursor: "pointer", // Change cursor to pointer to indicate the video is clickable
                    }}
                    autoPlay
                    muted // Ensure autoplay works across browsers
                    loop // Optional: Loop the videos
                  />
                ) : (
                  <img
                    src={content[key]}
                    alt={key}
                    style={{
                      width: "100%",
                      height: isMobile ? "200px" : "500px", // Adjust height based on screen size
                      objectFit: "cover", // Ensure images cover the container without distortion
                      cursor: "pointer", // Change cursor to pointer to indicate the image is clickable
                    }}
                  />
                )}
              </div>
            ))}
          </Box>
        ))}
      </Carousel>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent
          className="custom-scrollbar"
          style={{
            padding: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderRadius: "8px",
          }}
        >
          {selectedContent && (
            type === 'videos' ? (
              <video
                src={selectedContent}
                style={{ width: "100%", height: "auto" }}
                autoPlay
                muted
              />
            ) : (
              <img
                src={selectedContent}
                alt="Selected"
                style={{ width: "100%", height: "auto" }}
              />
            )
          )}
        </DialogContent>
      </Dialog>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            zIndex: 1,
          }}
          onClick={handleClose}
        />
      )}
    </div>
  );
};

export default CarouselComponent;
