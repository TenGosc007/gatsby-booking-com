import React from "react";

import arrowRight from "assets/arrowRight.svg";
import arrowLeft from "assets/arrowLeft.svg";

const CustomArrow = ({ type, onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className={`carousel-arrow carousel-arrow--${type}`}
      onClick={() => onClick()}
      style={{ color: "tomato" }}
    >
      {type === "right" && <img src={arrowRight} alt=">" />}
      {type === "left" && <img src={arrowLeft} alt="<" />}
    </button>
  );
};

export default CustomArrow;
