import React from "react";
import "./Css/Slider.css";
import leftArrow from "./Assets/icons/left-arrow.svg";
import RightArrow from "./Assets/icons/right-arrow.svg";
const BtnSlider = ({ direction, moveSlide }) => {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? RightArrow : leftArrow} />
    </button>
  );
};

export default BtnSlider;
