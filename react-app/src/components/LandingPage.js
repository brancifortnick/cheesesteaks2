import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import UsersImages from "./UsersImages";
import video from '../assets/31994bae7657087a9d7f486b8cd108c1.mp4'
import { useSelector } from "react-redux";
import FoodGallery from "./FoodGallery";
import AllImagesRefactorFour from "./AllImagesRefactorFour";

const LandingPage = () => {

  return (
    <>
    <header>
      <h1>WELCOME TO THE LANDING PAGE</h1>    </header>
    <div className='landing-page'>

        {/* <FoodGallery /> */}
        <video className='auto-vid' autoPlay loop muted >
          <source src={video} type="video/mp4" />

        </video>
        {/* <AllImagesRefactorFour /> */}
      <section>
          {/* <GetUsersIp /> */}
      </section>

</div>
</>
  );
};
export default LandingPage;
