// import React, { useContext } from "react";
import React, {useState} from "react";
import CartModal from "./CartModal";
// import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import MoreProducts from "../sections/MoreProducts";
import AboutProducts from "../sections/AboutProducts";
import Reviews from "../sections/Reviews"
import SimilarProducts from "../sections/SimilarProducts";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";
import Testimonials from "../sections/Testimonials";



const Landing2 = () => {
    const [openCart, setOpenCart] = useState(false);
      return (
        <>
        <Navbar/>
        <MoreProducts onAddToCart={() => setOpenCart(true)}/>
        {openCart && <CartModal onClose={() => setOpenCart(false)}/>}
        <AboutProducts/>
        <Reviews/>
        <Testimonials/>
        <SimilarProducts onAddToCart={() => setOpenCart(true)}/>
        <Footer/>
        <FooterNote/>
      
        </>
      )
}
export default Landing2;