import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import videoAlias from '../assets/steak_video.mp4'
const About = () => {
  return (
    <div className="about-section-container">
      <video className='video-snippet' src={ videoAlias } controls />
      {/* autoPlay loop muted  */ }
      <div className="about-background-image-container"></div>
      <div className="about-section-image-container">
        {/* <video className="about-video" srcSet={ videoAlias } type='video/mp4'>
        </video> */}
      </div>

      <div className="about-section-text-container">
        <h1 className="primary-heading">

          <p className="primary-subheading">Brief Overview</p>
          Cheesesteaks are one of Philadelphia's most sought out and iconic food items.
          Our goal is to provide a platform that allows users to see which cheesesteak spots are most popular,
          and to provide a platform for users to rate and review their favorite cheesesteak spots.
        </h1>
        {/* <p className="primary-text">
          place some shit here
        </p>
        <p className="primary-text">
          and place some more shit here
        </p> */}
        <div className="about-buttons-container">
          {/* <button className="secondary-button">Learn More</button> */ }

        </div>
      </div>
    </div>
  );
};

export default About;
