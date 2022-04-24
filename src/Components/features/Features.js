import React from "react";
import { featuersData, teamMebers } from "./FeaturesData";
import digitalLocker from "../../assets/images/digital-locker.jpg";

const Features = () => {
  return (
    <>
      <div className='features-wrapper'>
        <div className='features-title'>
          <h1>Our Features</h1>
        </div>
        <div className='features-container'>
          <div className='container'>
            <div className='row d-flex justify-content-evenly '>
              {featuersData.map((item) => {
                return (
                  <div className='col-5 featuers-box-grid mb-3' key={item.id}>
                    <div className='icons-box'>
                      <i className={`${item.icons} featuers-icons`}></i>
                    </div>
                    <div className='feature-conent-box'>
                      <div className='feature-title'>
                        <h3>{item.title}</h3>
                      </div>
                      <div className='feature-text'>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='banner-container row'>
        <div className='banner-image-box col-4'>
          <div className='grid-style-box'></div>
          <img
            className='banner-locker-img ms-auto d-block'
            src={digitalLocker}
            alt='locker security'
          />
        </div>
        <div className='banner-title-box col-8'>
          <h1 className='ms-5'>
            Happy landowners with secure land rights and enhanced land value
          </h1>
        </div>
      </div>

      {/* TEAM MEMBERS CODE */}

      <div className='team-group-container row mt-5'>
        <div className='team-group-title col-12'>Our Team</div>
        <div className='team-group-members col-12'>
          <div className='col-1 carousel-wrapper'>
            <div className='carousel-controls-left carousel-control'>
              <i className='bx bx-chevron-left icons-cars'></i>
            </div>
          </div>
          <div className='col-10'>
            <div className='row d-flex justify-content-between'>
              {teamMebers.map((member) => {
                return (
                  <div className='col-3 card-wrapper' key={member.id}>
                    <div className='member-img'>
                      <img
                        className='members-image'
                        src={member.img}
                        alt={member.name}
                      />
                    </div>
                    <div className='member-name'>{member.name}</div>
                    <div className='member-position'>{member.content}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='col-1 carousel-wrapper'>
            <div className='carousel-controls-left carousel-control'>
              <i className='bx bx-chevron-right icons-cars'></i>
            </div>
          </div>
        </div>
      </div>

      {/* TEAM MEMBERS CODE */}
    </>
  );
};

export default Features;
