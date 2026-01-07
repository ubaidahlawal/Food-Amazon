import React from "react";
import "../styles/Testimonials.css";
import Sarah from "../assets/Sarah.png";
import Meg from "../assets/Meg.png";
import Alyssa from "../assets/Alyssa.png";
import Ellyse from "../assets/Ellyse.png";
import Beth from "../assets/Beth.png";
import Megan from "../assets/Megan.png";
import Rating6 from "../assets/Rating6.png";

const Testimonials = () => {

    const reviews = [
    {
        userImage: Sarah,
        name: "Sarah Taylor",
        ratingImg: Rating6,
        title: "Organic Fruit Bites",
        text: "They're the perfect snack for my kids and I feel great knowing they're eating something healthy and natural."
     },

    {
        userImage: Meg,
        name: "Meg Lanning",
        ratingImg: Rating6,
        title: "Organic Fruit Bites",
        text: "They're deliciously chewy and full of flavor. It's like eating a fresh mango without the mess."
    },
    {
        userImage: Alyssa,
        name: "Alyssa Healy",
        ratingImg: Rating6,
        title: "Crunchy Nut Mix",
        text: "I'm addicted to the Spicy Nut Mix! The blend of almonds, cashews, and walnuts with a hint of spice is just perfect."
    },
    
    {
        userImage: Ellyse,
        name: "Ellyse Perry",
        ratingImg: Rating6,
        title: "Crunchy Nut Mix",
        text: "The Sweet & Salty Nut Mix is the best I've ever had. The nuts are roasted to perfection, and the balance of sweet."
    },
    
    {
        userImage: Beth,
        name: "Beth Mooney",
        ratingImg: Rating6,
        title: "Seed Power Bars",
        text: "The Original Seed Power Bar is a lifesaver for my busy mornings. It's packed with protein and fiber."
    },

    {
        userImage: Megan,
        name: "Megan Schutt",
        ratingImg: Rating6,
        title: "Seed Power Bars",
        text: "I tried the Chocolate Chip Seed Power Bar, and it exceeded my expectations. The combination is superb."
    },
    ];


    return (
        <>
        <section className="container my-5">
        <div className="row g-4 shadow-sm">
        {reviews.map((item, index) => (
        <div className="col-lg-4 col-md-6" key={index}>
        <div className="p-4 border rounded h-100">
        <img 
        src={item.userImage} 
        alt={item.name}  
        className="rounded-circle mb-3"
        width="60"/>
        <h6 className="fw-bold mb-2 t-name">{item.name}</h6>
        <img src={item.ratingImg} 
        alt="rating"
        className="mb-4"
        width="90"
         />
         <h6 className="mt-2 t-title">{item.title}</h6>
         <p className="text-muted small mt-4 t-text">{item.text}</p>
        </div>
        </div>
        ))}
        </div>
        <div className="text-center mt-4">
        <button className="btn btn-success text-center p-3 mt-4 btn-l">Load More</button>
        </div>
       </section>
        </>
        
    );
}
    

export default Testimonials;