import React, {useState} from "react";
import CartModal from "./CartModal";
import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import PopularProducts from "../sections/PopularProducts.jsx";
import HealthBenefit from "../sections/HealthBenefit.jsx";
import BulkOrders from "../sections/BulkOrders.jsx";
import NewProducts from "../sections/NewProducts.jsx";
import Offer from "../sections/Offer.jsx";
import Subscibe from "../sections/Subscibe.jsx";
import Footer from "../components/Footer.jsx";
import FooterNote from "../components/FooterNote.jsx";

const Landing = () => {
    const [openCart, setOpenCart] = useState(false);
    return (
        <>
        <Navbar/>
        <Hero/>
        <PopularProducts  onAddToCart={() => setOpenCart(true)} />
        {openCart && <CartModal onClose={() => setOpenCart(false)}/>}
        <HealthBenefit/>
        <BulkOrders/>
        <NewProducts  onAddToCart={() => setOpenCart(true)}/>
        <Offer  onAddToCart={() => setOpenCart(true)}/>
        <Subscibe/>
        <Footer/>
        <FooterNote/>
        </>
    );
};

export default Landing;