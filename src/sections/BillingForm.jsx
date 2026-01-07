import React from "react";
import "../styles/BillingForm.css";
import VisaIcon from "../assets/VisaIcon.png";
import PayPal from "../assets/PayPal.png";

const BillingForm = () => {
    return (
        <>
        <section className="container my-5 billing">
            <div className="row g-5">
                <div className="col-lg-7 col-12 billing-form">
                 <h5 className="fw-bold mb-5 bill">Billing Details</h5>
                 <input type="text" className="form-control mb-3 btn-name" placeholder="Your email address"/>
                 <h5 className="mb-3 name-btn">Deliver to</h5>
                 <select className="form-select mb-3 btn-name">
                    <option>Residence</option>
                    <option>Jeddah</option>
                    <option>Thuwal</option>
                    <option>Dammam</option>
                    <option>Texas</option>
                    <option>Jogja</option>
                    <option>Yogyargarta</option>
                    <option>Abuja</option>
                    <option>Lagos</option>
                    <option>Addisababa</option>
                    <option>Madinah</option>
                    <option>Riyadh</option>
                 </select>
                 <h5 className="mb-3 name-btn">Country</h5>
                 <select className="form-select mb-3 btn-name">
                    <option>Nigeria</option>
                    <option>Indonesia</option>
                    <option>Jordan</option>
                    <option>Somalia</option>
                    <option>Dubai</option>
                    <option>Saudi Arabia</option>
                    <option>Bahrain</option>
                    <option>Qatar</option>
                    <option>Yemen</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>U.S.A</option>
                 </select>

                 <div className="row btn-name gx-0">
                 <div className="col pe-2">
                    <input className="form-control mb-3 btn-name" placeholder="Your first name" />
                 </div>
                 <div className="col">
                    <input className="form-control mb-3 btn-name" placeholder="Your last name" />
                 </div>
                 </div>

                 <input className="form-control mb-3 btn-name"  placeholder="Your address"/>
                 <div className="row mt-3 gx-0">
                    <div className="col-4 pe-2">
                        <input className="form-control mb-3 btn-name" 
                        placeholder="City" 
                        type="text" 
                        id="city" 
                        name="city"
                        autoComplete="on"
                        />
                    </div>

                    <div className="col-4 pe-2 btn-name">
                    <select className="form-select mb-3">
                    <option>Ikeja</option>
                    <option>Ikoyi</option>
                    <option>Yaba</option>
                    <option>Sango</option>
                    <option>Badagry</option>
                    <option>Aguda</option>
                    <option>Lekki</option>
                    <option>Ojo</option>
                    <option>Epe</option>
                    <option>Agboowo</option>
                    <option>LASU</option>
                    <option>Ojota</option>
                 </select>
                 </div>
                 <div className="col-4 btn-name">
                 <input className="form-control mb-3 btn-name" placeholder="Zip code" />
                 </div>
                 
                 <input placeholder="Your phone number" className="form-control btn-name" />
                 <p className="mb-1 mt-3 btn-name">Order Note (optional)</p>
                 <textarea className="form-control mt-3 btn-name" placeholder="Tell us what do you think" rows="6">
                 </textarea>
                 </div>
                </div>

                <div className="col-lg-5 col-12 order-summary">
                    <h5 className="fw-bold mb-3 bill">Your Order</h5>
                    <hr />
                    <div className="summary-row mt-2">
                        <span>Original Price</span>
                        <span>$582.00</span>
                    </div>

                    <div className="summary-row mt-2">
                        <span>Savings</span>
                        <span>$82.00</span>
                    </div>

                    <div className="summary-row mt-2">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>

                    <div className="summary-row mt-2">
                        <span>Estimated Sales Tax</span>
                        <span>$3.50</span>
                    </div>

                    <hr />

                    <div className="summary-row total mt-2">
                        <span>Total</span>
                        <span>$496.50</span>
                    </div>

                    <h6 className="fw-bold mt-4 mb-3 bill">Pay With</h6>
                    <div className="payment-option mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-3 d-flex align-items-center gap-2 mt-2">
                        <input 
                        type="radio" 
                        className="form-check-input pay"
                        name="Payment"
                        defaultChecked
                        />
                        <label htmlFor="card" className="form-check-label d-flex align-items-center justify-content-between gap-5">
                         <span>Card</span>
                        </label>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                    <img src={VisaIcon} alt="visa-icon" className="img-fluid payment-logo" loading="lazy" />
                    </div>
                    </div>
                    </div>
                    
                    <div className="row mb-2 gx-0" >
                        <div className="col-md-6 pe-2">
                    <input type="text" className="form-control mb-1 mt-1  pay" placeholder="Card number" />
                    </div>
                    </div>
                    <div className="row  mb-3 gx-0">
                        <div className="col-md-6 pe-2">
                            <input type="text" className="form-control mt-2 mb-2  pay"  placeholder="Expiration date"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control mt-2 mb-2  pay"  placeholder="Security code"/>
                        </div>
                    </div>
                    <div className="row gx-0 mb-2">
                        <div className="col-md-6 pe-2">
                            <input type="text" className="form-control  pay"  placeholder="First name"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control  pay"  placeholder="Last name"/>
                        </div>
                    </div>

                    <div className="form-check mb-3 mt-3">
                        <input type="checkbox" id="remember"  className="form-check-input"/>
                        <label htmlFor="remember" className="form-check-label  pay">Remember this card for future order</label>
                    </div>
                    
                    <div className="d-flex gap-3 mb-3 mt-3">
                        <button className="btn btn-success w-100 p-3  pay">Done</button>
                        <button className="btn btn-outline-secondary w-100 text-success p-3  pay">Cancel</button>
                    </div>
                    <hr className="mt-4 mb-3" />
                    <div className="payment-option mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-3 mt-4 d-flex align-items-center gap-3">
                        <input 
                        type="radio"
                        className="form-check-input  pay"
                        name="payment"
                        id="paypal"
                        />
                        <label htmlFor="paypal" className="form-check-label d-flex align-items-center gap-3 pay">
                        <span>Paypal</span>
                        </label>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                    <img src={PayPal} alt="paypal-icon" className="img-fluid payment-logo" />
                    </div>
                    </div>
                    <button className="btn w-100 fw-bold order-btn mt-3  pay"> Place Order </button>
                </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default BillingForm;