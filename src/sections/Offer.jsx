import React from "react";
import "../styles/Offer.css";
import OfferImg from "../assets/OfferImg.png";
import OutImg from "../assets/OutImg.png";
import Almond from "../assets/Almond.png";
import Berries from "../assets/Berries.png";
import Coconut from "../assets/Coconut.png";
import HeartImg from "../assets/HeartImg.png";
import StarIcon from "../assets/StarIcon.png";
const Offer = ( { onAddToCart }) => {
    return (
        <>
        <section id="blog" className="py-5 offer-section">
        <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-1 text-center text-md-start">
        <h2 className="offer-h2">Hurry Do not Miss Out On <br /> This Offers!</h2>
        <button className="offer-btn btn btn-success mt-3 mb-4">Browse All</button>
        </div>
        
        <div className="row mb-4">
        <div className="col-md-8">
        <img src={OfferImg} alt="offer-img" className="img-fluid offer-img" loading="lazy"/>
        </div>
        <div className="col-md-4">
        
        <div className="product-item">
         <img src={OutImg} alt="Almond Delight" className="card-img-top c-img" />
         <div className="mt-4">
         <div className="d-flex justify-content-between align-items-center mb-1"> 
         <small className="text-muted">Coconut Flakes</small>
         <img src={HeartImg} alt="heart" loading="lazy" />
         </div>
         <h5 className="fw-bold mb-2 product-name mt-2">Coconut Crunchies</h5>
         <div className="d-flex justify-content-between  align-items-center mb-3">
         <div className="d-flex align-items-center gap-1 mt-2">
         <img src={StarIcon} alt="rating" className="star-icon" loading="lazy"/>
         <span>5.0 (102)</span>
         </div>
         <span className="fw-semibold">$399</span>
         </div>
         <button className="btn btn-outline-success w-100  p-3 p-btn" onClick={onAddToCart}>Add to Cart</button>
         </div>
         </div>
        </div>


        <div className="col-md-4">
         <div className="product-item mt-4">
         <img src={Almond} alt="Almond Delight" className="card-img-top c-img" />
         <div className="mt-4">
         <div className="d-flex justify-content-between align-items-center mb-1"> 
         <small className="text-muted">Coconut Flakes</small>
         <img src={HeartImg} alt="heart" loading="lazy" />
         </div>
         <h5 className="fw-bold mb-2 product-name mt-2">Organic Almond Delight</h5>
         <div className="d-flex justify-content-between align-items-center mb-3">
         <div className="d-flex align-items-center gap-1 mt-2">
         <img src={StarIcon} alt="rating" className="star-icon" loading="lazy"/>
         <span>5.0 (18)</span>
         </div>
         <span className="fw-semibold">$110</span>
         </div>
         <button className="btn btn-outline-success w-100 mt-3 p-3 p-btn" onClick={onAddToCart}>Add to Cart</button>
         </div>
         </div>
         </div>

         <div className="col-md-4">
         <div className="product-item mt-4">
         <img src={Berries} alt="Almond Delight" className="card-img-top c-img" loading="lazy"/>
         <div className="mt-4">
         <div className="d-flex justify-content-between align-items-center mb-1"> 
         <small className="text-muted">Coconut Flakes</small>
         <img src={HeartImg} alt="heart" loading="lazy"/>
         </div>
         <h5 className="fw-bold mb-2 product-name mt-2">Berry Bliss Bites</h5>
         <div className="d-flex justify-content-between align-items-center mb-3">
         <div className="d-flex align-items-center gap-1 mt-2">
         <img src={StarIcon} alt="rating" className="star-icon" loading="lazy"/>
         <span>5.0 (28)</span>
         </div>
         <span className="fw-semibold">$139</span>
         </div>
         <button className="btn btn-outline-success w-100 mt-3 p-3 p-btn" onClick={onAddToCart}>Add to Cart</button>
         </div>
         </div>
         </div>


         <div className="col-md-4">
         <div className="product-item mt-4">
         <img src={Coconut} alt="Almond Delight" className="card-img-top c-img"  loading="lazy"/>
         <div className="mt-4">
         <div className="d-flex justify-content-between align-items-center mb-1"> 
         <small className="text-muted">Coconut Flakes</small>
         <img src={HeartImg} alt="heart" loading="lazy" />
         </div>
         <h5 className="fw-bold mb-2 product-name mt-2">Coconut Crunchies</h5>
         <div className="d-flex justify-content-between align-items-center mb-3">
         <div className="d-flex align-items-center gap-1 mt-2">
         <img src={StarIcon} alt="rating" className="star-icon" loading="lazy" />
         <span>5.0 (102)</span>
         </div>
         <span className="fw-semibold">$399</span>
         </div>
         <button className="btn btn-outline-success w-100 mt-3 p-3 p-btn" onClick={onAddToCart}>Add to Cart</button>
         </div>
         </div>
         </div>

        </div>
    
        </div>
        </section>
        </>
    )
    
}

export default Offer;