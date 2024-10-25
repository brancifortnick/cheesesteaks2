import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import UsersImages from "./UsersImages";
import video from '../assets/steak_video.mp4'
import { useSelector } from "react-redux";
import FoodGallery from "./FoodGallery";
import AllImagesRefactorFour from "./AllImagesRefactorFour";
import Home from "./Home";
import Footer from './Footer';
import About from "./About";
const LandingPage = () => {

  return (

    <div className='landing-page'>

      <h1>Welcome TO THE Steak Out</h1>
      <ul>
        <a href='Home'>
          <Home />
        </a>
        <a href='About'>
          <About />
        </a>
      </ul>
      {/* <FoodGallery /> */}
      <video className='auto-vid' autoPlay loop muted controls >
        <source src={video} type="video/mp4" />
      </video>

      {/* <AllImagesRefactorFour /> */}
      <section>
        {/* <GetUsersIp /> */}
      </section>

    </div >

  );
};
export default LandingPage;
