import React from "react";
import "./button.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick }) => (
  <button
    onClick={onClick}
    className={["btn", `btn-${type}`, className, "button"].join(" ")}
  >
    {children}
  </button>
);

export default Button;