import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";

const MainLayout = () => {
    return (
        <>
       <Navbar/>
       <Outlet/>
       <Footer/>
       <FooterNote/>
        </>
    )
}
export default MainLayout;