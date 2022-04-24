import React from "react";
// import { Carousel } from "react-bootstrap";
import imageOne from "../../assets/images/jono-hirst-9Vnxo0cCR3Q-unsplash.jpg";
import imageTwo from "../../assets/images/bence-sztrecska-JKgpivfBggg-unsplash.jpg";
import imageThree from "../../assets/images/kenrick-baksh-7lfdd49G5ZQ-unsplash.jpg";
const Carousels = () => {
  return (
    <>
      <div className='carousel-container'>
        <div className='carousel-image-one-wrapper'>
          <img
            src={imageOne}
            className='carousel-image'
            alt='carousel-image-one'
          />
        </div>
        <div className='carousel-image-two-wrapper'>
          <img
            src={imageTwo}
            className='carousel-image'
            alt='carousel-image-two'
          />
        </div>
      </div>
      <div className='controls-wrapper'>
        <div className='carousel-controls'>
          <div className='carousel-controls-left carousel-control'>
            <i className='bx bx-chevron-left icons-cars'></i>
          </div>
          <div className='carousel-controls-right carousel-control'>
            <i className='bx bx-chevron-right icons-cars'></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousels;
