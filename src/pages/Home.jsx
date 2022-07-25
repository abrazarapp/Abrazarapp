import React, { useContext } from "react";
import image from "../assets/images/Initial.svg";
import { useNavigate } from "react-router-dom";
import Brand from "../components/Brand";
import { UserContext } from "../context/UserContext";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleLogin = () => navigate("/personal-info");

  const handleAnonLogin = () => {
    if (user) {
      navigate("/progress");
    } else {
      navigate("/personal-info");
    }
  };

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
        <button type="button" className="Home_btn btn_anon" onClick={handleAnonLogin}>
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
