import React from "react";

function Slider() {
  return (
    <div className="main-slider bg-black pb-4">
      <p className="m-heading text-white px-4 text-center pt-2">TV TOONS INDIA - DOWNLOAD MOVIES, WEB SERIES AND TV SHOWS</p>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="500">
            <img
              src="./images/cover.png"
              className="d-block w-100"
              alt="cover"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="500">
            <img
              src="./images/cover1.jpg"
              className="d-block w-100"
              alt="cover"
            />
          </div>
          <div className="carousel-item" data-bs-interval="500">
            <img
              src="./images/cover2.jpg"
              className="d-block w-100"
              alt="cover"
            />
          </div>
          <div className="carousel-item" data-bs-interval="500">
            <img
              src="./images/cover3.png"
              className="d-block w-100"
              alt="cover"
            />
          </div>
          <div className="carousel-item" data-bs-interval="500">
            <img
              src="./images/cover4.jpg"
              className="d-block w-100"
              alt="cover"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
