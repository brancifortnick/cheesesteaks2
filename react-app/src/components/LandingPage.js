import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import UsersImages from "./UsersImages";
import video from "../assets/steak_video.mp4";
import { useSelector } from "react-redux";
import FoodGallery from "./FoodGallery";
import AllImagesRefactorFour from "./AllImagesRefactorFour";
import Home from "./Home";
import PhotoPseudoAlias from "../assets/orange_background.png";
import PhotoPseudoAliasThree from "../assets/happy-quote.jpg";
import PseudoImageName from "../assets/about-background-image.png";
import About from "./About";
import Footer from "./Footer";
import Contact from './Contact';
import { TbBackground } from "react-icons/tb";
const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <h1 className='landing-title'>Get Out | Pig Out | STEAK OUT</h1>
        <div>
          <Home />
          < About />
        </div>
        <div>
          {/* <img className='orange-blob' src={ PhotoPseudoAlias } ></img> */ }
          <Contact />
        </div>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </>
  );
};
export default LandingPage;
