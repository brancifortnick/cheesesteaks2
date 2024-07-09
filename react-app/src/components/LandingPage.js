import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import photo from '../assets/iconmonstr-linkedin-3.svg'
const LandingPage = () => {
  return (
    <div>
      <p className="welcome-text"> Welcome To The Preliminary Landing Page</p>
      <img src={photo}/>
    </div>
  );
};
export default LandingPage;
