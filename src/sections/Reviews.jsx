import React from "react";
import "../styles/Reviews.css";
import Rating5 from "../assets/Rating5.png";
import BlackRate from "../assets/BlackRate.png";

const Reviews = () => {
    return (
        <>
        <section className="review-section container">
        <div className="row g-5">
        <div className="col-lg-6">
        <div className="fw-bold">Customer Reviews</div>
        <p className="mt-4 mb-2">77 Reviews</p>
        <img src={Rating5} alt="rating-5" className="img-fluid mt-3"  loading="lazy"/>
       
        <div className="d-flex align-items-center gap-4 customer-rating mt-3">
        <span className="rating-rate text-muted">5 Stars</span>
        <div className="rating-bg w-100">
        <div className="rating-fill w-75"></div>
        </div>
        <span className="rating-count text-muted">37</span>
        </div>
       
        <div className="d-flex align-items-center gap-4 customer-rating mt-3">
        <span className="rating-rate text-muted">4 Stars</span>
        <div className="rating-bgg w-100">
        <div className="rating-filll w-75"></div>
        </div>
        <span className="rating-count text-muted">20</span>
        </div>

        <div className="d-flex align-items-center gap-4 customer-rating mt-3">
        <span className="rating-rate text-muted">3 Stars</span>
        <div className="rating-bg3 w-100">
        <div className="rating-fill3 w-75"></div>
        </div>
        <span className="rating-count text-muted">12</span>
        </div>

        <div className="d-flex align-items-center gap-4 customer-rating mt-3">
        <span className="rating-rate text-muted">2 Stars</span>
        <div className="rating-bg4 w-100">
        <div className="rating-fill4 w-75"></div>
        </div>
        <span className="rating-count text-muted">8</span>
        </div>

        <div className="d-flex align-items-center gap-4 customer-rating mt-3">
        <span className="rating-rate text-muted">1 Stars</span>
        <div className="rating-bg5 w-100">
        <div className="rating-fill5 w-75"></div>
        </div>
        <span className="rating-count text-muted">0</span>
        </div>
        </div>
        <div className="col-lg-6">
        <h5 className="fw-bold">How would you rate this?</h5>
        <img src={BlackRate} alt="black-rate" className="img-fluid" />
        <h5 className="mt-4">Add a headline</h5>
        <input type="text" className="form-control my-3 p-3 mb-4 input-rate" placeholder="Write a summary of your review" />
        <h5 className="mb-2">Write a review</h5>
        <textarea rows="5" className="form-control mb-3 review-textarea" placeholder="Tell us what do you think"></textarea>
        <button className="btn btn-success p-3 mt-3">Submit Review</button>
        </div>
       
        
        </div>
        </section>
        </>
    )
}

export default Reviews;