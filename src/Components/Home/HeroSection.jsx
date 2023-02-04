import React from "react";
import video from "../../Assets/videos/navbar.mp4";
import "../../Css/heroSection.css";

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
