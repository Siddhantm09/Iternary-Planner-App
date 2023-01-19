import React, { useState } from "react";
import "../../Css/Slider.css";
import BtnSlider from "../../BtnSlider";
import GoaData from "../../SliderData/GoaSlider";

const Goa = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== GoaData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === GoaData.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {};
  return (
    <div className="container-slider">
      {GoaData.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.image} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default Goa;
