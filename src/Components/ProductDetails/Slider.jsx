import React, { useState } from "react";
import "./Slider.css";
const Slider = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  return (
    <div className="slider-container-box  ">
      <div className="main-image ">
        <img
          src={imageUrls[currentIndex]}
          alt="furniture"
          className="sliderImage w-[660px] h-[495px] md:h-[400px] "
        />
      </div>
      <div className="thumbnails">
        {imageUrls.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="thumbnail"
            className={
              index === currentIndex ? "active sliderImage" : "sliderImage"
            }
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button onClick={prevSlide} className="btn prev-button ">
        {"<"}
      </button>
      <button onClick={nextSlide} className="btn next-button ">
        {">"}
      </button>
    </div>
  );
};

export default Slider;
