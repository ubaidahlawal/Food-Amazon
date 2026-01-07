import React from "react";
import "../styles/CartModal.css";
import FirstProduct from "../assets/FirstProduct.png";
import SecondProduct from "../assets/SecondProduct.png";
import ThirdProduct from "../assets/ThirdProduct.png";
import ModalX from "../assets/ModalX.png";
import { useNavigate } from "react-router-dom";

const CartModal = ({onClose}) => {
  const navigate = useNavigate();

  const items = [
    {
        id: 1,
        name: "Coconut Date Energy Bars",
        img: FirstProduct,
        cartId: "Cart ID: 12345678910",
        price: "$60"
    },

    {
       id: 2,
       name: "Organic Fruit Bites",
       img: SecondProduct,
       cartId: "Cart ID: 12345678911",
       price:"$60"
    },

    { 
        id: 3,
        name:"Choco-Chia Delight",
        img: ThirdProduct,
        cartId: "Cart ID: 12345678912",
        price:"$60"

    }
  ];

  return (
    <>
    <section className="cart-overlay">
    <div className="cart-modal">
    <button className="modal-close" onClick={onClose}>
    <img src={ModalX} alt="close" className="close-btn img-fluid" loading="lazy" />
    </button>
    <div className="cart-content">
    <div className="cart-left">
    {items.map((item, index) => (
        <div key={item.id} className="cart-item">
        <div className="item-header d-flex justify-content-between mb-3">
        <span>item {index + 1} </span>
        <div className="item-actions">
        <span>Edit</span>
        <span>Remove</span>
        </div>
        </div>

        <div className="item-body mb-3">
        <img src={item.img} alt={item.name} className="img-fluid" loading="lazy"/>
        <div>
        <h6> {item.name} </h6>
        <small>{item.cartId}</small>
        <p>{item.price}</p>
        </div>
        </div>
        </div>
    
    ))}
    </div>
   
     
     <div className="cart-right">
     <div className="total-header d-flex justify-content-between mb-2">
     <h5>Cart Order Total (3)</h5>
     <strong>$582</strong>
     </div>
     <div className="cart-congrats mb-0">
     <p className="free fw-bold"> Congrats! You get Free Shipping.</p>
     <small className="text-muted">Being your first purchase.</small>
     </div>
    <button className="btn view-cart" onClick={() => navigate("/landing4")}>View Cart</button>
    <button className="btn checkout" onClick={() => navigate("/landing5")}>Check Out</button>

     </div>
     </div>
    </div>
    </section>
    </>
  );
};

export default CartModal;