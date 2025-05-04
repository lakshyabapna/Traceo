import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;

