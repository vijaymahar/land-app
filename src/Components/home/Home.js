import React from "react";
import Carousels from "../carousels/Carousels";
import Navbar from "../navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home-container'>
        <div className='home-container-left'>
          <div className='home-container-left-top'></div>
          <div className='main_content_wrapper'>
            <div className='main-page-text'>
              <div className='home-container-main-text'>
                <h1>
                  Single Platform <span>for land services</span>
                </h1>
              </div>
              <div className='home-container-sub-text'>
                Creating a single digital platform on land connecting all
                stakeholders around the world providing all land services
                pertaining to the land across the country at one's doorsteps
                anywhere on the golbe
              </div>
            </div>
            <div className='registration-page-button'>
              <button className='registration-btn mt-4'>
                Register with us
              </button>
            </div>
          </div>
        </div>
        <div className='home-container-right'>
          <Carousels />
        </div>
      </div>
    </>
  );
};

export default Home;
