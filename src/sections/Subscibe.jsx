import React from "react";
import "../styles/Subscribe.css";
import InputIcon from "../assets/InputIcon.png";
import Triangle from "../assets/Triangle.png";
import OvalS from "../assets/OvalS.png"

const Subscibe = () => {
    return (
        <>
        <section id="subscribe" className="py-5 subscribe-section">
        <div className="container">
        <div className="subscribe-box text-center text-white mx-auto">
        <img src={Triangle} alt="triangle" className="img-fluid triangle d-none d-md-block" loading="lazy" />
        <img src={OvalS} alt="oval-s" className="img-fluid oval-s d-none d-md-block" loading="lazy"/>
        <h2 className="fw-bold mb-2 sb-h2">Subscribe Our Newsletter</h2>
        <p className="mb-4 sb-p">Receive latest updates on our products and many other things <br /> every week. </p>
        <div className="subscribe-form mx-auto">
        <input
        type="email"
        className="form-control sb-input"
        placeholder="Enter Your Email Address"/>
        <img src={InputIcon} alt="input-icon" className="img-fluid input-icon" loading="lazy" />
        <hr className="f-hr" />
        </div>
        </div>
         </div>
        </section>
        </>
    )
}

export default Subscibe;