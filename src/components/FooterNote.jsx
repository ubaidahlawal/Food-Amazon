import React from "react";
import Logo from "../assets/FNLogo.png"
import BankIcons from "../assets/BankIcons.png"
import "../styles/FNote.css"

const FooterNote = () => {
    return (
       <>
       <section className="footer-note py-3">
       <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
       <img src={Logo} alt="logo" className="fn-logo img-fluid mb-2 me-md-5" loading="lazy"/>
       <img src={BankIcons} alt="bank-icons" className="img-fluid bank-icons mb-2 me-md-3" loading="lazy"/>
       <p className="mb-0 copy">Copyright © 2024 FoodieAmazon. All Rights Reserved</p>
       </div>

       </section>
       </>
    );
}

export default FooterNote;