import React from "react";
import "../Styles/Button.css";

const GradientButton = ({ children, href }) => {
  return (
    <>
      <button
        onClick={() => window.open(href, "_blank")}
        className="gradient-button"
      >
        {children}
      </button>
    </>
  );
};

export default GradientButton;
