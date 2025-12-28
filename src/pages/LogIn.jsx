import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthImage from "../assets/Auth.png";
import '../styles/LogIn.css';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
   return (
     <>
     <div className="min-vh-100 d-flex align-items-center justify-content-center">
     <div className="row w-100 overflow-hidden" style={{maxWidth: "1200px"}}>
     
      <div className="col-md-6 p-0 auth-img">
      <img src={AuthImage} alt="Food Amazon"className="img-fluid h-100 w-100 " />
      </div>
      
      <div className="col-md-6 d-flex flex-column justify-content-center auth-form">
      <h4 className="mb-4 fw-bold login">Login</h4>
      <p className="text-muted mb-4">
      Don’t have an account yet? {" "}
      <Link to="/signup" className="fw-semibold in-span">Sign Up</Link>
      </p>

      <form onSubmit={handleLogIn}>
        <div className="mb-4">
        <input type="email"
         className="form-control p-3"
         placeholder="Email address"
         required
         />
        </div>
      <div className="mb-4 position-relative">
      <input type={showPassword ? "text" : "password"}
      className="form-control p-3"
      placeholder="Password"
      required
       />
       <span onClick={togglePassword}
        className="position-absolute top-50 end-0 pe-3 translate-middle-y">
        <i className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
        </span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="form-check">
      <input type="checkbox"
       id="rememberMe"
       className="form-check-input"
       />
       <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
      </div>
      <span className="text-success small fw-semibold" style={{cursor: "pointer"}}>Forgot Password?</span>
      </div>
      <button className="btn btn-success w-100 mt-2">Sign In</button>
      </form>
      </div>

     </div>
     </div>
     </>
   );
}

export default LogIn;