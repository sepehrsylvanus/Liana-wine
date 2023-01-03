import React from "react";
import "./button.css";
 import { Link } from "react-router-dom";

const Button = ({to, title}) => {
  return (
    <div>
      <Link to={to}>
        <span>{title}</span>
        <div class="liquid"></div>
      </Link>
    </div>
  );
};

export default Button;
