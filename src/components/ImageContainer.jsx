import React from "react";

const ImageContainer = () => {

  return (
    <div className="image-container">
      <img
        src="https://picsum.photos/350/400" 
        alt="Auth"
      />
      <div className="text-on-image">Friskence <span className="AI">AI</span></div>
      <div className="text-on-image-down">Capturing Moments,<br/>Creating Memories</div>
    </div>
  );
};

export default ImageContainer;
