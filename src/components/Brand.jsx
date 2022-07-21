import React from "react";
import logo from "../assets/images/logo.svg";
import "../styles/Brand.css";

const Brand = () => {
  return (
    <div className="Brand">
      <img src={logo} alt="Logo" />
      <h1>Abrazar</h1>
    </div>
  );
};

export default Brand;
