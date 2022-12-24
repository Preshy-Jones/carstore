import Head from "next/head";
import React from "react";
import SideBar from "../CarStore/SideBar/SideBar";
import Footer from "./Footer";
import Navbar from "./NavBar";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-10">
      <div className=" col-start-1 col-end-11 ">
        <Navbar />
      </div>
      <div className=" col-start-1 col-end-3 ">
        <SideBar />
      </div>
      <main className="col-start-3 col-end-11">{children}</main>
      <Footer />
    </div>
  );
};

export default StoreLayout;
