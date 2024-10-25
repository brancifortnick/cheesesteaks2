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
const LandingPage = () => {
  return (
    <div className="landing-page">

      STEAK OUT
      <div>
        <div>

          <Home />
          <img src={ PseudoImageName } ></img>
        </div>
        <div>
          <img src={ PhotoPseudoAliasThree } ></img>
        </div>
        <div>
          <About />

          <img src={ PhotoPseudoAlias } ></img> <div>

          </div>

        </div>
        <Contact />
      </div>
      {/* <FoodGallery /> */ }
      <footer>
        <Footer />
      </footer>

    </div>
  );
};
export default LandingPage;
