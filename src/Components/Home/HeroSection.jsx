import { Typography } from "@mui/material";
import React from "react";
import video from "../../Assets/production ID_4133023 (1).mp4";
import "../../index.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <video src={video} muted autoPlay loop type="video/mp4" />
      </div>
    </>
  );
};

export default HeroSection;
