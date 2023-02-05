import React from "react";
import video from "../../assets/videos/navbar.mp4";
import "../../css/heroSection.css";

const HeroSection = () => {
  return (
    <div className="container1">
      <div className="video">
        <video src={video} muted autoPlay loop type="video/mp4" />
      </div>

      <div className="overlay">
        <h1></h1>
      </div>
    </div>
  );
};

export default HeroSection;
