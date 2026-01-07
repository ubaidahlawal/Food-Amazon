import React from "react";
import "../styles/BulkOrders.css";
import OrderArrow from "../assets/OrderArrow.png";
import AlmondC from "../assets/AlmondC.png";
import Cruchies from "../assets/Cruchies.png";
import Organic from "../assets/Organic.png";
import WhiteArrow from "../assets/WhiteArrow.png";
import Box4Img from "../assets/Box4Img.png";
import { useNavigate } from "react-router-dom";


const BulkOrders = () => {
    const navigate = useNavigate()
    return (
        <>
        <section className="bulk-orders py-5">
        <div className="container text-center">
        <h1 className="bulk-title mb-0">Bulk Orders</h1>
        <hr className="bulk-hr mb-4" />
        <p className="bulk-text mb-5">
        Our snacks are free from artificial additives, providing a pure and wholesome snacking experience.
        Discover our range of delightful organic treats designed to satisfy your cravings while supporting a healthy lifestyle.
        </p>

        <div className="row g-4">

        <div className="col-lg-3 col-md-6">
        <div className="bulk-box shadow-sm bg-white">
        <img src={Organic} alt="berries-img" className="img-fluid bulk-img mb-4" loading="lazy"/>
        <h5 className="mb-2 bulk-h5">Organic Almond Delight</h5>
        <p className="bulk-p fw-medium">Crunchy almonds coated with a touch of organic honey, perfect for a healthy snack.</p>
        <button className="btn btn-outline-success bulk-btn mt-2"> ORDER NOW
        <img src={OrderArrow} alt="order-arrow" className="img-fluid" loading="lazy"/>
        </button>
        </div>
        </div>

        <div className="col-lg-3 col-md-6">
        <div className="bulk-box shadow-sm bg-white">
        <img src={AlmondC} alt="berries-img" className="img-fluid bulk-img mb-4"loading="lazy"/>
        <h5 className="mb-2 bulk-h5">Berry Bliss Bites</h5>
        <p className="bulk-p fw-medium">A delightful mix of organic berries and nuts, offering a burst of flavor in every bite.</p>
        <button className="btn btn-outline-success bulk-btn mt-2"> ORDER NOW
        <img src={OrderArrow} alt="order-arrow" className="img-fluid" loading="lazy"/>
        </button>
        </div>
        </div>


        <div className="col-lg-3 col-md-6">
        <div className="bulk-box shadow-sm bg-white">
        <img src={Cruchies} alt="berries-img" className="img-fluid bulk-img mb-4" loading="lazy" />
        <h5 className="mb-2 bulk-h5">Coconut Crunchies</h5>
        <p className="bulk-p fw-medium">Light and crispy coconut flakes, naturally sweet and utterly delicious taste.</p>
        <button className="btn btn-outline-success bulk-btn mt-2"> ORDER NOW
        <img src={OrderArrow} alt="order-arrow" className="img-fluid" loading="lazy"/>
        </button>
        </div>
        </div>


        <div className="col-lg-3 col-md-6">
        <div className="bulk-box-4 shadow-sm bg-success">
        <img src={Box4Img} alt="img-4" className="img-fluid" loading="lazy"/>
        <h5 className="mb-2 bulk-h5-4">Others</h5>
        <p className="bulk-p-4 fw-medium text-white">Milk, Tools, Spice, etc.</p>
        <button onClick={() => navigate("/landing2")} className="btn btn-outline bulk-btnn mt-2 text-white"> ORDER NOW
        <img src={WhiteArrow} alt="order-arrow" className="img-fluid  or-arr-4" loading="lazy"/>
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default BulkOrders;