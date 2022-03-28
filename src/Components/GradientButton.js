import React from "react";
import "../Styles/Button.css";

const GradientButton = ({ children }) => {
  return (
    <div>
      <button className="gradient-button">{children}</button>
    </div>
  );
};

export default GradientButton;
