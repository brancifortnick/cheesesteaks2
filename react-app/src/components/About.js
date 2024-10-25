import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container"></div>
      <div className="about-section-image-container"></div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          <p className="primary-subheading">Brief Overview</p>
          Cheesesteaks are some of Philadelphia's most sought out and iconic food,
          comparing the Philly Cheesesteak to other cities favorites like New
          York Pizza',
          and New Orleans for their crawfish and gumbo.
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            {/* <BsFillPlayCircleFill /> */ }
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
