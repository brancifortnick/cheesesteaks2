import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import UsersImages from "./UsersImages";
import video from '../assets/steak_video.mp4'
import { useSelector } from "react-redux";
import FoodGallery from "./FoodGallery";
import AllImagesRefactorFour from "./AllImagesRefactorFour";

const LandingPage = () => {

  return (

    <div className='landing-page'>

      <h1>Welcome TO THE Steak Out</h1>

      {/* <FoodGallery /> */}
      <video className='auto-vid' autoPlay loop muted controls >
        <source src={video} type="video/mp4" />
        <div className='secondary-text-div'>
          <body className='secondary-text-body'>
            <h2>Steak Out</h2>
            <h3>Where the best steak is always on the menu</h3>
            <h4>Join us for a meal you won't forget</h4>
          </body>
        </div>
      </video>
      {/* <AllImagesRefactorFour /> */}
      <section>
        {/* <GetUsersIp /> */}
      </section>

    </div >

  );
};
export default LandingPage;
