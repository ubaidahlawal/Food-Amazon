import React from "react";
import "../styles/Hero.css";
import SolarIcon from "../assets/SolarIcon.png";
import FrameIcon from "../assets/FrameIcon.png";
import FoodAmazon from "../assets/FoodAmazon.png";
import Rating from "../assets/Rating.png";
import TextLogo from "../assets/TextLogo.png";
import GreenWaves from "../assets/GreenWaves.png";
import HeroNote from "../assets/HeroNote.png";
const Hero = () => {
    return (
        <>
        <section id="home" className="hero-section py-5">
        <div className="container">
        <div className="container row align-items-center">
        <div className="hero-text col-12 col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
        <p className="text-muted text-dark hero-p">Discover the Pure Taste of Nature</p>
        <h1 className="mb-3 hero-h1">
        Organic <span className="hero-span"> Snacks </span> Made
        <span className="hero-span"> with </span>Love, Just
        <span className="hero-span"> for </span> You!
        </h1>
        <button className="btn d-flex align-items-center gap-2 icon-btn">
        Shop Now <img src={SolarIcon} alt="s-icon" />
        </button>
        <img src={FrameIcon} alt="f-icon" className="img-fluid mt-5 frame-icon" />
        </div>

        <div className="col-lg-6 hero-image position-relative hero-img-wrapper">
        <img src={FoodAmazon} alt="food-plate" className="plate-img img-fluid" />
        <img src={Rating} alt="5 stars" className="rating-badge img-fluid" />
        <img src={TextLogo} alt="text-logo" className="img-fluid text-logo"/>
        </div>
        </div>
        </div>
        <img src={GreenWaves} alt="green-waves" className="green-waves" />
        <div className="note-wrap">
        <img src={HeroNote} alt="hero-note" className="hero-note img-fluid" />
        </div>
        </section>
       
        </>
    )
}

export default Hero;