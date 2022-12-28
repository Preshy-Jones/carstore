import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
