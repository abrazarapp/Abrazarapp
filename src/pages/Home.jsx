import React from "react";
import image from "../assets/images/Initial.svg";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Brand from "../components/Brand";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/personal-info");

  return (
    <div className="Home">
      <h2>¡Felicidades, ya estas un paso más cerca!</h2>
      <div className="Home_image">
        <img src={image} alt="Imagen de bienvenida" />
      </div>
      <div className="Home_buttons">
        <button type="button" className="Home_btn btn_google" onClick={handleLogin}>
          Ingresar con Google
        </button>
        <button type="button" className="Home_btn btn_anon" onClick={handleLogin}>
          Ingresar Anonimamente
        </button>
      </div>
      <div className="Home_brand">
        <Brand />
      </div>
    </div>
  );
};

export default Home;
