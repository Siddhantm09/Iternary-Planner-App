import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Assets/SliderImages/KalpaSlider/img1.jpg";
import img2 from "../../Assets/SliderImages/KalpaSlider/img2.jpg";
import img3 from "../../Assets/SliderImages/KalpaSlider/img3.jpg";
import img4 from "../../Assets/SliderImages/KalpaSlider/img4.jpg";
import "../../css/slide2.css";
const Kalpa = () => {
  return (
    <div>
      <Carousel className="main-slide">
        <div>
          <img src={img1} height="300px" width="200px" />
        </div>
        <div>
          <img src={img2} height="300px" width="200px" />
        </div>
        <div>
          <img src={img3} height="300px" width="200px" />
        </div>
        <div>
          <img src={img4} height="300px" width="200px" />
        </div>
      </Carousel>
    </div>
  );
};

export default Kalpa;
