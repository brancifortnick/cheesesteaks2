import React from "react";

import videoAlias from '../assets/large-barclay-img.jpg'
const About = () => {
    return (
        <div className="about-section-container-two">
            <img className='img-snippet' src={ videoAlias } autoPlay loop muted />
            <div className="about-background-image-container-two"></div>
            <div className="about-section-image-container-two">

            </div>

            <div className="about-section-text-container-two">
                <h1 className="primary-heading-two">

                    <p className="primary-subheading-two">
                        Most Expensive $$$</p>
                    Located just steps away from Rittenhouse Square you can find the priciest cheesesteak in Philadelphia. Barclay Prime Steakhouse not only delivers on its sexy and sleek decor.  Chefs here have elevated the dish, the Cheesesteak is made with Wagyu ribeye, foie gras, truffled cheese whiz, and served on a sesame roll. Not to mention Moet anyone? It comes with a half bottle of champagne to wash down the delectable hand-food. The price tag? $120.00 ... Not bad for a cheesesteak that's been featured on the Travel Channel and the Food Network.

                </h1>
                {/* <p className="primary-text">
          place some shit here
        </p> */}
                <p className="primary-text-two">
                    IDK what to do here yet maybe image banner if so style it animation: 1 or 200s scroll infinite linear and pick shapes modify
                </p>

            </div>
        </div>
    );
};

export default About;
