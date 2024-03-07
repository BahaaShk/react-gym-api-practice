import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from '../assets/images/banner.png' 
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position={"relative"}
      p={"20px"}
    >
      <Typography color={"#FF2625"} fontSize={"24px"} fontWeight={"600"}>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} mb={2} mt={4} sx={{fontSize:{lg:"44px", xs:"40px"}}}>
        Sweat, Smile <br /> and repeat
      </Typography>
      <Typography fontSize={"22px"} mb={3} lineHeight={"35px"}>
        Check out the most effective exercises
      </Typography>
      <a href={"/#exercises"}>
      <Button variant="contained" color="error" sx={{backgroundColor:"#ff2625", padding:"10px"}}>
  Explore Exercises
</Button>
      </a>
<Typography color={"#FF2625"} fontWeight={600}
sx={{opacity:0.2,
fontSize:"200px",
display: { xs:"none", lg:"block" },
}}
>
  Exercises
</Typography>
<img src={HeroBannerImage} alt="bannerImg" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
