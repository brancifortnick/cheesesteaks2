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
import AboutTwo from './AboutTwo'
import photoQuote from '../assets/happy-quote.jpg'
import theme from "./Theme";

const LandingPage = () => {
  const videoStyles = {
    background- size: "contain",
    width: "100%",
  };
  return (
    <>

      <img className="image-styling-landing" style={ videoStyles } src={ photoQuote } type='image/*'></img>
      <div className="landing-page">
        <h1 className='landing-title'>Get Out | Pig Out | STEAK OUT</h1>

          <Home />
          < About />
        <AboutTwo />

          {/* <img className='orange-blob' src={ PhotoPseudoAlias } ></img> */ }
          <Contact />

        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </>
  );
};
export default LandingPage;
