import React from "react";
import "../Styles/Button.css";

const GradientButton = ({ children }) => {
  return (
    <>
      <button className="gradient-button">{children}</button>
    </>
  );
};

export default GradientButton;
