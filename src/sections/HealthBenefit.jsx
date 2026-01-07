import React from "react";
import "../styles/HealthBenefit.css";
import FoodWrapper from "../assets/FoodWrapper.png";

const HealthBenefit = () => {
    return (
        <>
        <section id="health" className="health-benefit py-5">
        <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
        <img src={FoodWrapper} alt="food-wrapper" className="img-fluid mb-3 HB-img" loading="lazy"/>
        <button className="btn hb-btn px-5 py-3 rounded-pill shadow-sm">100% Organic</button>
        </div>

        <div className="col-lg-6">
        <h1 className="HB-title mb-3">
         HIGH QUALITY <span className="HB-span"> <br /> ORGANIC SNACKS</span>
         </h1>
         <p className="text-muted HB-p">
         At Foodie Amazon, we believe in the power of nature to provide wholesome, delicious snacks. Our journey began with a simple mission: 
         to bring the pure taste of nature to your doorstep. We are dedicated to creating snacks that are not only delicious but also healthy and free from artificial additives.
         Our major focus is on providing organic snacks that are made with the finest ingredients sourced from sustainable farms. <br /> <br />
         Our commitment to quality means that you won't find any gums, preservatives, or artificial sugars in our products.
         Instead, we use natural sweeteners and preservatives to ensure that every bite is as healthy as it is tasty.
         </p>
         <div className="vision-wrapper mt-4">
         <hr  className="HB-line"/>
         <p className="vision-text mb-0">
         Our vision is to become a household name in organic snacks, 
         known for our commitment <br /> to quality and sustainability.
         </p>
         </div>
         <div className="ceo-signature mt-3">
        <p className="text-muted ceo-name mb-0">John Doe </p>
        <small className="text-muted ceo-title mt-0"> Chief Executive Officer</small>
        </div>
        </div>
        </div> 
        </div>
        </section>
        </>
    )
}

export default HealthBenefit;