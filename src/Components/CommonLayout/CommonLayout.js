import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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

