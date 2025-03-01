import React from "react";
import { useState, useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

const LoginForm = ({isLogin,toggleForm}) => {
  const [hovered, setHovered] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      if (buttonRef.current) {
        buttonRef.current.classList.add("glow");
        setTimeout(() => {
          buttonRef.current.classList.remove("glow");
        }, 1000); // Remove glow after 1s
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []); 

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe); // Toggle checkbox value
  };
  
  return (
  <div className="form-content">
    <h1>Welcome Back</h1>
    <h4>New User? <button ref={buttonRef} onClick={toggleForm} className='toggle-btn'>
        {isLogin ? "Sign Up" : "Login"}
      </button></h4>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <div className="checkbox-container">
              <input 
                type="checkbox" 
                id="rememberMe" 
                checked={rememberMe}
                onChange={handleCheckboxChange} 
              />
              <label htmlFor="rememberMe" style={{ marginLeft: '5px' }}>I agree to the <span className={`terms ${hovered ? "hovered" : ""}`}>Terms and conditions</span></label>
            </div>
    <button className="form-button"  onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} >Login</button>
    <h5>------------------------------- Or Login With --------------------------------</h5>
    
        
        <div className="social-buttons">
            <button  className={`google-btn ${hovered ? "hovered" : ""}`}>
              <FontAwesomeIcon icon={faGoogle} className="icon" />
              Google
            </button>
    
            <button className={`apple-btn ${hovered ? "hovered" : ""}`}>
              <FontAwesomeIcon icon={faApple} className="icon" />
             Apple
            </button>
          </div>
  </div>
)};

export default LoginForm;
