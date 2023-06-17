import { useState } from "react";
import "./basic.css";

const ConditionalRender = () => {
    
  const [isVisible, setIsVisible] = useState(true);
  console.log('RENDER');

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="basic-conditional-container">
      <h1>Conditional Render</h1>
      <button
        className="btn btn-primary basic-conditional-button"
        onClick={handleToggle}
      >
        {isVisible ? "Ocultar" : "Mostrar"}
      </button>

      {isVisible && (
        <div className="basic-conditional-element">
          <h3>elemento visible</h3>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
