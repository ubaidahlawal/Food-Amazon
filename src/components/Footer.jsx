import React from "react";
import "../styles/Footer.css"
import FooterStars from "../assets/FooterStars.png";
import TrustPilot from "../assets/TrustPilot.png"
import SocialIcons from "../assets/SocialIcons.png"

const Footer = () => {
    return (

        <>
        <footer id="faqs"  className="footer-section py-5">
        <div className="container">
        <div className="footer-top text-center">
        <h4 className="footer-h4 text-white">Excellent</h4>
        <img src={FooterStars} alt="footer-stars" className="img-fluid footer-stars mt-3" loading="lazy"/>
        <h5 className="text-white footer-h5 mt-3">Based on 13,586 reviews</h5>
        <hr className="ff-hr"/>
        <img src={TrustPilot} alt="trust-pilot" className="trust-pilot img-fluid" loading="lazy" />
        </div>
        <hr className="f-hr"/>
        <div className="footer-grid row g-5 text-md-start text-center mt-5">
        <div className="col-6 col-md-2 col-lg text-white">
        <h5 className="footer-h fw-semibold mb-3">Customer Service</h5>
        <ul className="list-unstyled ul-f">
        <li className="mb-3">Order Lookup</li>
        <li className="mb-3">Bulk Order</li>
        <li className="mb-3">Shipping & Delivery</li>
        <li className="mb-3">Discounts</li>
        </ul>
        </div>

        <div className="col-6 col-md-2 col-lg text-white">
        <h5 className="footer-h fw-semibold mb-3">About Us</h5>
        <ul className="list-unstyled ul-f">
        <li className="mb-3">News & Blog</li>
        <li className="mb-3">Suppliers</li>
        <li className="mb-3">Terms & Conditions</li>
        <li className="mb-3">Privacy Policy</li>
        </ul>
        </div>

        <div className="col-6 col-md-2 col-lg text-white">
        <h5 className="footer-h fw-semibold mb-3">Need Help?</h5>
        <ul className="list-unstyled ul-f">
        <li className="mb-3">Contact Us</li>
        <li className="mb-3">FAQs</li>
        </ul>
        </div>

        <div className="col-6 col-md-2 col-lg text-white">
        <h5 className="footer-h fw-semibold mb-3">Privacy</h5>
        <ul className="list-unstyled ul-f">
        <li className="mb-3">Terms & Conditions</li>
        <li className="mb-3">Privacy Policy</li>
        </ul>
        </div>

        <div className="col-12 col-md-2 col-4 text-white">
        <h5 className="footer-h fw-semibold mb-3">Follow us</h5>
        <ul className="list-unstyled ul-f">
        <li><img src={SocialIcons} alt="social-icons" className="img-fluid f-img" loading="lazy" /></li>
        </ul>
        </div>

        </div>

        </div>
        </footer>
       </>
    )
    
}
export default Footer;