import React from "react";
import { FaMedal, FaPeopleArrows, FaHandsHelping, FaInfoCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import CustomLink from "../components/CustomLink";
import "../styles/NavigationLayout.css";

const NavigationLayout = ({ children }) => {
  return (
    <div className="NavigationLayout">
      <section className="NavigationLayout_content">{children}</section>
      <nav className="Navbar">
        <CustomLink to="/progress">
          <FaMedal fontSize={18} color="black" />
          <p>Progreso</p>
        </CustomLink>
        <CustomLink to="/comunity">
          <IoIosPeople fontSize={18} color="black" />
          <p>Comunidad</p>
        </CustomLink>
        <CustomLink to="/">
          <FaPeopleArrows fontSize={18} color="black" />
          <p>Padrino</p>
        </CustomLink>
        <CustomLink to="/">
          <FaHandsHelping fontSize={18} color="black" />
          <p>Ayuda</p>
        </CustomLink>
        <CustomLink to="/">
          <FaInfoCircle fontSize={18} color="black" />
          <p>Referencias</p>
        </CustomLink>
      </nav>
    </div>
  );
};

export default NavigationLayout;
