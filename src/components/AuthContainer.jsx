import React, { useState } from "react";
import FormContainer from "./FormContainer";
import ImageContainer from "./ImageContainer";
import Image2Container from "./Image2Container";
import "./AuthContainer.css"; // We will create this CSS file later

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    console.log("clicked")
  };

  return (
    <div className={`auth-container ${isLogin ? "login-active" : ""}`}>
      <div className="auth-box">
        <FormContainer isLogin={isLogin} toggleForm={toggleForm} />
        {isLogin? <ImageContainer/>: <Image2Container/>}
      </div>
    </div>
  );
};

export default AuthContainer;
