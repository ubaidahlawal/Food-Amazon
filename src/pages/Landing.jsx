import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import PopularProducts from "../sections/PopularProducts.jsx";
// import HealthBenefit from "../sections/HealthBenefit.jsx";

const Landing = () => {
    return (
        <>
        <Navbar/>
        <Hero/>
        <PopularProducts/>
        {/* <HealthBenefit/> */}
        </>
    );
};

export default Landing;