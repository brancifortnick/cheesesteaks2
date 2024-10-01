import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import UsersImages from "./UsersImages";
import video from '../assets/31994bae7657087a9d7f486b8cd108c1.mp4'

const LandingPage = () => {
  return (
    <div>
      <video controls autoplay>
        <source type='video/mp4' src={video} />
      </video>

      {/* <UsersImages /> */}
    </div>
  );
};
export default LandingPage;
