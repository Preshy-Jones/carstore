import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

const layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layouts;
