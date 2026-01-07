import React from "react";
import "../styles/AboutProducts.css";

const AboutProducts = () => {
    return (
        <>
         <section className="container py-5">
         <div className="row mt-5">
         <div className="col-lg-6">
         <h5 className="fw-bold about-title mt-0">About This Product</h5>
         <p className="text-muted about-text mt-3">
         Indulge in the natural crunch and flavor of our Crunchy Nut Mix, a <br /> blend of premium nuts roasted to perfection. This mix includes <br /> almonds, cashews, and walnuts, 
         providing a delicious and <br /> nutritious snack that is rich in protein and healthy fats.
         </p>
        <ul className="mt-4 about-text">
        <li>Blend of organic almonds, cashews, and walnuts</li>
        <li>Lightly roasted to enhance natural flavors</li>
        <li>No added oils or preservatives</li>
         </ul>
         <p className="text-muted about-text mt-4">
        <strong className="about-text"> Benefits: </strong>
        Excellent source of protein and healthy fats.
        Supports <br /> heart health and brain function. Satisfies hunger and boosts <br /> energy.
         </p>
         </div>
         </div>
         </section>
        </>
    )
}
export default AboutProducts;