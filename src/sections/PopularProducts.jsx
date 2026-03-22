import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "../styles/PopularProducts.css";
import Almond from "../assets/Almond.png";
import Berries from "../assets/Berries.png";
import Coconut from "../assets/Coconut.png";
import HeartImg from "../assets/HeartImg.png";
import StarIcon from "../assets/StarIcon.png";
const PopularProducts = ({ onAddToCart }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const res = await fetch("http://localhost:4000/api/products");
        const data = await res.json();
        setProducts(data);
      };
  
      fetchProducts();
    }, [])

    return (
        <>
        <section id="products" className="products-section py-5">
        <div className="container">
        <div className="mb-3">
        <h1 className="fw-bold products-h1">Our Popular Products</h1>
        </div>
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
        <div>
        <p className="text-muted mb-0 product-p">
        Browse our most popular snacks and make your day more beautiful and glorious.
        </p>
        </div>
        <Link to="/landing2" className="btn btn-outline-success mt-3 mt-md-0 product-btn p-3 mx-auto mx-md-0">
        Browse All
        </Link>
        </div>    
         
         <div className="row g-4">
         <div className="col-md-4">
         <div className="product-item mt-4">
         <img src={Almond} alt="Almond Delight" className="card-img-top c-img" />
         <div className="mt-4">
         <div className="d-flex justify-content-between align-items-center mb-1"> 
         <small className="text-muted">Coconut Flakes</small>
         <img src={HeartImg} alt="heart" loading="lazy"/>
         </div>
         <h5 className="fw-bold mb-2 product-name mt-2">Organic Almond Delight</h5>
         <div className="d-flex justify-content-between align-items-center mb-3">
         <div className="d-flex align-items-center gap-1 mt-2">
         <img src={StarIcon} alt="rating" className="star-icon" loading="lazy" />
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
         <img src={Berries} alt="Almond Delight" className="card-img-top c-img" />
         <div className="mt-4">
         <div className="d-flex justify-content-between align-items-center mb-1"> 
         <small className="text-muted">Coconut Flakes</small>
         <img src={HeartImg} alt="heart" loading="lazy" />
         </div>
         <h5 className="fw-bold mb-2 product-name mt-2">Berry Bliss Bites</h5>
         <div className="d-flex justify-content-between align-items-center mb-3">
         <div className="d-flex align-items-center gap-1 mt-2">
         <img src={StarIcon} alt="rating" className="star-icon" loading="lazy" />
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
         <img src={Coconut} alt="Almond Delight" className="card-img-top c-img" />
         <div className="mt-4">
         <div className="d-flex justify-content-between align-items-center mb-1"> 
         <small className="text-muted">Coconut Flakes</small>
         <img src={HeartImg} alt="heart" loading="lazy" />
         </div>
         <h5 className="fw-bold mb-2 product-name mt-2">Coconut Crunchies</h5>
         <div className="d-flex justify-content-between align-items-center mb-3">
         <div className="d-flex align-items-center gap-1 mt-2">
         <img src={StarIcon} alt="rating" className="star-icon" loading="lazy"/>
         <span>5.0 (102)</span>
         </div>
         <span className="fw-semibold">$399</span>
         </div>
         <button className="btn btn-outline-success w-100 mt-3 p-3 p-btn" onClick={onAddToCart}>Add to Cart</button>
         </div>
         </div>
         </div>
         </div>
         
         <div className="section-line mt-5">
         <span></span>
         </div>

        </div>
        </section>
        </>
    )
}

export default PopularProducts;