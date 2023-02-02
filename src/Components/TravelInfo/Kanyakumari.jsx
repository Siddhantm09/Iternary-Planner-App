import { Container } from "@mui/material";
import React, { useState } from "react";
import img1 from "../../Assets/SliderImages/KanyakumariSlider/img1.jpg";
import img2 from "../../Assets/SliderImages/KanyakumariSlider/img2.jpg";
import img3 from "../../Assets/SliderImages/KanyakumariSlider/img3.jpg";

const Kanyakumari = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={img1}
            class="d-block w-100 "
            alt="..."
            //style={{ height: "75vh" }}
          />
        </div>
        <div class="carousel-item">
          <img
            src={img2}
            class="d-block w-100"
            alt="..."
            // style={{ height: "75vh" }}
          />
        </div>
        <div class="carousel-item">
          <img
            src={img3}
            class="d-block w-100 "
            alt="..."
            // style={{ height: "75vh" }}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Kanyakumari;
