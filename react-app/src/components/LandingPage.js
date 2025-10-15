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

import AboutTwo from './AboutTwo'
import photoQuote from '../assets/happy-quote.jpg'
import theme from "./Theme";
import GetUsersIp from "./GetUsersIp";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section" style={{ position: 'relative' }}>
        <img
          className="image-styling-landing"
          src={photoQuote}
          alt="Delicious steaks and food"
        />
        <h1 className="landing-title">Get Out | Pig Out | STEAK OUT</h1>
      </div>

      {/* Content Sections */}
      <Home />
      <GetUsersIp />
      <About />
      <AboutTwo />
      <Contact />
    </div>
  );
};
export default LandingPage;
