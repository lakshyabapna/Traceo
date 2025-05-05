import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './CommonLayout.css'
const CommonLayout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CommonLayout;

