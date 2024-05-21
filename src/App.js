import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import { Box } from "@mui/material";

import CarouselComponent from "./Components/CarouselComponent";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";


function App() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <ResponsiveAppBar />
      <Header alignment={"center"} text={"HARRY"} />
      <Header alignment={"left"} text={"PHOTOS"} />

      <CarouselComponent srcLocation={"../photos"} type={"images"} />
      <Header alignment={"left"} text={"PRODUCED VIDEOS"} showMobile={true} />
      <CarouselComponent srcLocation={"../videos"} type={"videos"} />
      <Header alignment={"left"} text={"CLIENT PHOTOS"} showMobile={true} />
      <CarouselComponent srcLocation={"../clientphotos"} type={"images"} />
      <Header alignment={"left"} text={"ABOUT ME"} showMobile={true} />
      <AboutMe/>
      <Header alignment={"left"} text={"CONTACT ME"} showMobile={true} />
      <ContactMe/>
    </Box>
  );
}

export default App;
