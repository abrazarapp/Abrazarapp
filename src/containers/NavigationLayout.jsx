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
        <CustomLink to="/">
          <FaMedal fontSize={18} color="black" />
          <p>Progreso</p>
        </CustomLink>
        <CustomLink to="/comunity">
          <IoIosPeople fontSize={18} color="black" />
          <p>Comunidad</p>
        </CustomLink>
        <CustomLink to="/sponsorship">
          <FaPeopleArrows fontSize={18} color="black" />
          <p>Padrino</p>
        </CustomLink>
        <CustomLink to="/help">
          <FaHandsHelping fontSize={18} color="black" />
          <p>Ayuda</p>
        </CustomLink>
        <CustomLink to="/references">
          <FaInfoCircle fontSize={18} color="black" />
          <p>Referencias</p>
        </CustomLink>
      </nav>
    </div>
  );
};

export default NavigationLayout;
