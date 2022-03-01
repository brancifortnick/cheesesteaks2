import React, { useEffect, useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [vote, setVote] = useState(0);
  const [downVote, setDownVote] = useState(0);

  return (
    <div>

      <p className="welcome-text"> Welcome To The Preliminary Landing Page</p>
    </div>
  );
};

export default LandingPage;
