import React from "react";

const Image2Container = () => {
 
  return (
    <div className="image-container">
      <img
        src="https://picsum.photos/350/400?grayscale" 
        alt="Auth"
      />
        <div className="text2-on-image">Friskence <span className="AI">AI</span></div>
        <div className="text2-on-image-down">Frame Life's<br/>Best Moements</div>
    </div>
  );
};

export default Image2Container;
