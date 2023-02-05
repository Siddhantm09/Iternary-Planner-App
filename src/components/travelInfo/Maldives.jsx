import React from "react";
import { MaldivesImages } from "../../placesData/MaldivesData";
const Maldives = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {MaldivesImages.map((data, index) => (
            <div
              key={index}
              class="carousel-item active"
              data-bs-interval="8000"
            >
              <img key={index} src={data} class="d-block w-100" alt="..." />
            </div>
          ))}
          {/* <div class="carousel-item" data-bs-interval="2000">
    <img src={goa2} class="d-block w-100" alt="..." />
  </div>
  <div class="carousel-item">
    <img src={goa3} class="d-block w-100" alt="..." />
  </div>
  <div class="carousel-item">
    <img src={goa4} class="d-block w-100" alt="..." />
  </div> */}
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

export default Maldives;
