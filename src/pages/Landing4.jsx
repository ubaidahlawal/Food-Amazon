import React, {useState} from "react";
import CartModal from "./CartModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";
import CartItems from "../sections/CartItems";
import PeopleProducts from "../sections/People";

const Landing4 = () => {
    const [openCart, setOpenCart] = useState(false);
      return (
        <>
        <Navbar/>
        <CartItems/>
        <PeopleProducts onAddToCart={() => setOpenCart(true)}/>
        {openCart && <CartModal onClose={() => setOpenCart(false)}/>}
        <Footer/>
        <FooterNote/>
        </>
      )
}
export default Landing4;