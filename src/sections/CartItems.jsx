import { Link } from "react-router-dom";
import React from "react";
import "../styles/CartItems.css";
import Item1 from  "../assets/Item1.png";
import Item2 from "../assets/Item2.png";
import Item3 from "../assets/Item3.png";


const CartItems = () => {
    const orderItems = [
        {
            id: 1,
            name: "Coconut Date Energy Bars",
            cartId: "Cart ID: 12345678910",
            price: "$60",
            image: Item1

        },
        {
            id: 2,
            name: "Organic Fruit Bites",
            cartId: "Cart ID: 12345678911",
            price: "$60",
            image: Item2

        },

        {
            id: 3,
            name: "Choco-Chia Delight",
            cartId: "Cart ID: 12345678912",
            price: "$60",
            image: Item3
        },
    ];

    return (
        <>
        <section className="container  cart-items">
        <div className="row gx-5">

        <div className="col-lg-7 col-md-12">
        <h5 className="fw-bold mb-4 order-item">Shopping Cart ({orderItems.length} items)</h5>
        {orderItems.map((item, index) => (
            <div key={item.id} className="order-item mb-4 pb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-semibold">item{index + 1}</span>
            <div className="d-flex align-items-center gap-3">
            <div className="item-actions">
            <span className="action-text">Save for later</span>
            <span className="action-text">Remove</span>
            </div>
            <div className="d-flex align-items-center gap-2">
            <span>Qty:</span>
            <button className="qty-btn">-</button>
            <span className="qty-value">1</span>
            <button className="qty-btn">+</button>
            </div>
            </div>
            </div>

            <div className="d-flex gap-3">
            <img src={item.image} alt={item.name} className="cart-img" />
            <div>
            <p className="fw-bold mb-1">{item.name}</p>
            <small className="text-muted">{item.cartId}</small>
            <p className="fw-semibold mt-1">{item.price}</p> 
            </div>
            </div>
            </div>
        ))}
        </div>
        
        <div className="col-lg-5 col-md-12">
        <h5 className="fw-bold mb-3">Order Summary</h5>
        <hr />
        <div className="summary-row">
        <span>Original Price</span>
        <span>$582.00</span>
        </div>
        <div className="summary-row">
        <span>Savings</span>
        <span>$82.00</span>
        </div>
        <div className="summary-row">
        <span>Shipping</span>
        <span>FREE</span>
        </div>
        <div className="summary-row">
        <span>Estimated Sales Tax</span>
        <span>$3.50</span>
        </div>
        <hr />
        <div className="summary-row fw-bold fs-5">
        <span>Total</span>
        <span>$496.50</span>
        </div>
        <Link to="/landing5" className="btn checkout-btn w-100 mt-3">Proceed to Check Out</Link>
        </div>
        </div>
        </section>
        </>
    )
}
export default CartItems;