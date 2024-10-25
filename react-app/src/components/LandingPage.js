import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import UsersImages from "./UsersImages";
import video from '../assets/steak_video.mp4'
import { useSelector } from "react-redux";
import FoodGallery from "./FoodGallery";
import AllImagesRefactorFour from "./AllImagesRefactorFour";
import Home from "./Home";
import PhotoPseudoAlias from '../assets/orangeBackground..png'
import PseudoImageName from '../assets/about-background-image.png'
import About from './About';

const LandingPage = () => {


  return (


    <div className='landing-page'>
      <header>STEAK OUT</header>

      <ul>
        <div>
          <Home />
          {PseudoImageName}
        </div>
        <div>
          <About />
          {PhotoPseudoAlias}
        </div>
      </ul>
      {/* <FoodGallery /> */}

    </div >

  );
};
export default LandingPage;
