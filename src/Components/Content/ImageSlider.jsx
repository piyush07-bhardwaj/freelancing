import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  };

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const content = (
    <div className="w-full h-full flex flex-col">
      <div className="relative w-full h-full">
        <img
          src={imageUrls[imageIndex]}
          alt="#"
          className="h-full w-full transition-opacity  "
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button onClick={showPrevImage}>
            <MdOutlineKeyboardDoubleArrowLeft className="text-3xl bg-white text-slate-900 rounded-full m-2" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button onClick={showNextImage}>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl bg-white text-slate-900 rounded-full m-2" />
          </button>
        </div>
      </div>
    </div>
  );

  return content;
};

export default ImageSlider;
