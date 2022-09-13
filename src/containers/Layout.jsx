import React from "react";
// import Header from "../components/Header";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      {/* <Header /> */}
      <section className="Layout-content">{children}</section>
    </div>
  );
};

export default Layout;
