import React from "react";
import video from "../../Assets/production ID_4133023 (1).mp4";
import "../../heroSection.css";

const HeroSection = () => {
  return (
    <div className="container">
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
