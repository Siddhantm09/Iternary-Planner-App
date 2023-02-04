import React from "react";
import goa1 from "../../Assets/SliderImages/goaSlider/goa1.png";
import goa2 from "../../Assets/SliderImages/goaSlider/goa2.png";
import goa3 from "../../Assets/SliderImages/goaSlider/goa3.png";
import goa4 from "../../Assets/SliderImages/goaSlider/goa4.png";

const Goa = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={goa1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={goa2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={goa3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={goa4} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Goa;
