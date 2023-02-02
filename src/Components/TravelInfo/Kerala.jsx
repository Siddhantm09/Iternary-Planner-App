import React, { useState } from "react";
//import "../../css/kerala.css";
import img1 from "../../Assets/SliderImages/KeralaSlider/img1.jpg";
import img2 from "../../Assets/SliderImages/KeralaSlider/img2.jpg";
import img3 from "../../Assets/SliderImages/KeralaSlider/img3.jpg";
import img4 from "../../Assets/SliderImages/KeralaSlider/img4.jpg";

const Kerala = () => {
  return (
    <div id="slider">
      <figure>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
      </figure>
    </div>
  );
};

export default Kerala;
