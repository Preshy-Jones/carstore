import Head from "next/head";
import React from "react";
import SideBar from "../CarStore/SideBar/SideBar";
import Footer from "./Footer";
import Navbar from "./NavBar";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-14">
      <div className=" col-start-1 col-end-15 ">
        <Navbar />
      </div>
      <div className=" col-start-1 col-end-4 ">
        <SideBar />
      </div>
      <main className="col-start-4 col-end-15">{children}</main>
      <div className=" col-start-1 col-end-15 ">
        <Footer />
      </div>
    </div>
  );
};

export default StoreLayout;
