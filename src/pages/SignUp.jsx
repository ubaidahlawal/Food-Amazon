import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthImage from "../assets/Auth.png";
import '../styles/SignUp.css';


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
   
    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        const formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value,
            password: e.target[3].value,
        };

        try {
            const res = await
            fetch("http://localhost:4000/api/auth/signup",

            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Signup failed");

            console.log("Signup Success:", data);
            setSuccess("Account created successfully!");
            e.target.reset();

            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    
    return (
        <>
        <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="row w-100 overflow-hidden">
          
        <div className="col-md-6 p-0">
        <img src={AuthImage} alt="Food Amazon" className="img-fluid h-100 w-100" loading="lazy"/>
        </div>

        <div className="col-md-6 p-4 p-md-5 d-flex flex-column justify-content-center">
        <h4 className="mb-4 fw-bold sign-up">Sign up</h4>
        <p className="text-muted mb-4 sign-in">Already have an account? {" "} 
        <Link to="/login" className="fw-semibold in-span">Sign In</Link>
        </p>
        
        <form onSubmit={handleSignUp}>
        <div className="mb-5 mt-3">
        <input type="text" className="form-control p-3" placeholder="Your name" required
         />
        </div>
         
        <div className="mb-5">
        <input type="email" className="form-control p-3" placeholder="Email Address" required />
        </div>

        <div className="mb-5">
        <input type="tel" className="form-control p-3" placeholder="Phone Number" required />
        </div>

        <div className="mb-5 position-relative">
        <input type={showPassword ? "text" : "password"} className="form-control p-3" placeholder="Password" required />
        
        <span onClick={togglePassword}
        className="position-absolute top-50 end-0 pe-3 translate-middle-y">
        <i className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
        </span>
        </div>

         <div className="form-check mb-4">
         <input className="form-check-input p-2" type="checkbox" required />
         <p className="form-check-label small">
         I agree with {""} <span className="text-success">Privacy Policy </span> and {""} 
         <span className="text-success">Terms of Use</span>
         </p>
         </div>
         <button type="submit" className= {`btn signup-btn w-100 mt-4 mt-md-5 mb-5 mb-lg-0 ${loading ? "loading" : ""}`}>
            <span className="btn-text">Sign Up</span>
            <i className="bx bx-loader-dots bx-spin loader-icon"></i>
         </button>
        </form>
        <div className="loading"></div>
        </div>
        </div>
        </div>
        </>
    );
}

export default SignUp;