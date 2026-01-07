import { Link } from "react-router-dom";
import React from "react";
import Logo from "../assets/Logo.png";
import Search from "../assets/Search.png";
import Heart from "../assets/Heart.png";
import Cart from "../assets/Cart.png";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const handleNavList = () => {navigate("/")}
    return(
        <>
        <nav className="navbar navbar-expand-lg sticky-top shadow-sm position-fixed top-0 fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
        <div className="nav-logo me-lg-5 navbar-brand">
        <img src={Logo} alt="logo" loading="lazy"/>
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
        <li className="nav-item"><Link to="/" className="text-dark">Home</Link></li>
        <li className="nav-item"><a href="#products" onClick={handleNavList} className="text-dark">Our Products</a></li>
        <li className="nav-item"><a href="#health"  onClick={handleNavList} className="text-dark">Health Benefits</a></li>
        <li className="nav-item"><a href="#blog"  onClick={handleNavList} className="text-dark">Blog</a></li>
        <li className="nav-item"><a href="#faqs" onClick={handleNavList} className="text-dark">FAQs</a></li>
        </ul>
        <div className="d-none d-lg-flex align-items-center gap-5 nav-actions ms-auto">
        <img src={Search} alt="s-icon" className="me-4" loading="lazy"/>
        <div className="d-flex align-items-center gap-3">
        <img src={Heart} alt="h-icon" onClick={() => navigate("/landing3")} loading="lazy"/>
        <img src={Cart} alt="c-icon" onClick={() => navigate("/landing4")}   loading="lazy"/>
        </div>
        <a href="#subscribe" type="button" className="btn btn-success nav-btn ms-4  w-100">Contact Us</a>
        </div>
        </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar;