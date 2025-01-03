// Accordion.js
import React, { useState } from "react";
import "./Accordion.css";
import photo from "../assets/caret.svg";
import { useSelector } from "react-redux";


import AddComments from "./AddComments";
const Accordion = ({ children, toggleText }) => {
  const user = useSelector((state) => state.session.user);
  const [expand, setExpansion] = useState("closed");

  const expandCollapse = () => {
    setExpansion(expand === "closed" ? "open" : "closed");
  };

  return (
    <div className="accordion-wrapper" cs-state={ expand }>
      <div className="accordion-head" onClick={ expandCollapse }>
        { toggleText }
      </div>
      <div className="accordion-body">
        { children }
      </div>
    </div>
  )
};

export default Accordion;
