import React from "react";
import "../styles/MoreProducts.css";
import ProductImg from "../assets/ProductImg.png";
import MoreImg from "../assets/MoreImg.png";
import Rating from "../assets/RatingV.png";

const MoreProducts = ({ onAddToCart }) => {
    return (
        <>
        <section className="container  moreProduct-sec">
        <div className="row g-5 align-items-start">
        <div className="col-lg-6">
        <div className="product-images d-flex flex-column align-items-center">
        <img src={ProductImg} alt="product-img" className="img-fluid" />
        <img src={MoreImg} alt="more-img" className="img-fluid mt-3" />
        </div>
        </div>

        <div className="col-lg-6">
        <small className="text-muted c-f">Coconut Flakes</small>
        <h2 className="fw-bold mp-h2">Coconut Crunchies</h2>
        <div className="d-flex align-items-center gap-3 my-2 mt-3">
        <span className="text-decoration-line-through text-muted">$120</span>
        <span className="fs-4 fw-bold mp-m">$60</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 mt-3">
        <img src={Rating} alt="rating" className="img-fluid"/>
        <span className="text-muted rate">5.0 (37)</span>
        </div>
        <div className="mb-3 d-flex align-items-start gap-4 mt-4">
        <strong>Variety:</strong>
        <ul className="ps-3 mb-0">
        <li>Classic Nut Mix</li>
        <li>Spicy Nut Mix</li>
        <li>Sweet & Salty Nut Mix</li>
        </ul>
        </div>

        <div className="mb-3 d-flex align-items-center gap-3 mt-4">
       <strong>Quantity:</strong>
       <span className="qty-btn px-3 btn">-</span>
       <span className="btn qty-value px-3">1</span>
       <span className="qty-btn px-3 btn">+</span>
        </div>
        <p className="text-muted mt-5 mb-4 mp-p">
        Our Date-Coconut Delight combines the rich sweetness of organic date syrup with the tropical 
        flavor of coconut flakes, creating a snack that’s both  indulgent and healthy.
        </p>
        <button className="btn w-100 green-btn mt-5" onClick={onAddToCart}>
         Add to Cart</button>
        <button className="btn w-100 orange-btn mt-4">Check Out</button>
        </div>

        </div>
        </section>
        </>
    )
}
export default MoreProducts;