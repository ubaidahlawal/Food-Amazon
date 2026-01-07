import React from "react";
import "../styles/WishList.css";
import XMark from "../assets/XMark.png";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import { Link } from "react-router-dom";

const WishList = () => {

    const wishlistItems = [
        {
            id: 1,
            iconImage: XMark,
            productImage: Product1,
            name: "Organic Fruit Bites",
            price: "$237.45",
            stock: "In Stock"
        },
        {
            id: 2,
            iconImage: XMark,
            productImage: Product2,
            name: "Seed Power Bars",
            price: "$874.45",
            stock: "In Stock"  
        },
        {
            id: 3,
            iconImage: XMark,
            productImage: Product3,
            name: "Coconut Date Energy Bars",
            price: "$510",
            stock: "In Stock"
        },
    ];

    return (
        <>
        <section className="container wishlist-sec my-2">
        <h2 className="text-center fw-bold product-title">Wish List</h2>
        <p className="text-center text-muted product-text">3 items in your wishlist</p>
        <div className="row fw-bold border-bottom py-3 d-none d-md-flex">
        <div className="col-md-5">Product Name</div>
        <div className="col-md-3">Unit Price</div>
        <div className="col-md-2">Stock Status</div>
        <div className="col-md-2"></div>
        </div>
        {wishlistItems.map((item) => (
            <div className="row align-items-center border-bottom py-4 wishlist-row shadow-sm" key={item.id}>
            <div className="col-md-5 d-flex align-items-center gap-3">
            <img src={item.iconImage} alt="icon-image" className="x-icon" />
            <img src={item.productImage} alt={item.name}  className="product-img"/>
            <span className="product-text">{item.name}</span>
            </div>
            <div className="col-md-3 mt-3 mt-md-0 product-text"> {item.price} </div>
            <div className="col-md-2 mt-3 mt-md-0 product-text">{item.stock}</div>
            <div className="col-md-2 mt-3 mt-md-0">
            <button className="btn btn-success px-4"> Add To Cart </button>
            </div>
            </div>
        ))}
           <div className="text-end mt-4">
           <h5 className="products-text small">
            Estimated Total: <br /> <br />
            <strong className="strong">$648</strong>
            </h5>
            <Link to="/landing4" className="btn btn-success mt-2 px-5 btn-cart">
            Add All to Cart
            </Link>
           </div>
        </section>
        </>
    );
};

export default WishList;