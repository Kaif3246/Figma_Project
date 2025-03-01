import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const FormContainer = ({ isLogin, toggleForm }) => {
  return (
    <div className="form-container">
      {isLogin ? <LoginForm isLogin={isLogin} toggleForm={toggleForm} /> : <SignupForm isLogin={isLogin} toggleForm={toggleForm} />}
    
    </div>
  );
};

export default FormContainer;
