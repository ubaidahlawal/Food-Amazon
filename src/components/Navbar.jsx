import React from "react";
import Logo from "../assets/Logo.png";
import Search from "../assets/Search.png";
import Heart from "../assets/Heart.png";
import Cart from "../assets/Cart.png";
import "../styles/Navbar.css";

const Navbar = () => {

    return(
        <>
        <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
        <div className="nav-logo me-lg-5 navbar-brand">
        <img src={Logo} alt="logo"/>
        </div>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>        
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto ms-lg-5 gap-5 mb-0 nav-links">
        <li className="nav-item"><a href="#home" className="text-dark">Home</a></li>
        <li className="nav-item"><a href="#products" className="text-dark">Our Products</a></li>
        <li className="nav-item"><a href="#health" className="text-dark">Health Benefits</a></li>
        <li className="nav-item"><a href="#blog" className="text-dark">Blog</a></li>
        <li className="nav-item"><a href="#faqs" className="text-dark">FAQs</a></li>
        </ul>
        <div className="d-none d-lg-flex align-items-center gap-5 nav-actions ms-auto">
        <img src={Search} alt="s-icon" className="me-4" />
        <div className="d-flex align-items-center gap-3">
        <img src={Heart} alt="h-icon" />
        <img src={Cart} alt="c-icon" />
        </div>
        <button type="button" className="btn btn-success nav-btn ms-4  w-100">Contact Us</button>
        </div>
        </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar;