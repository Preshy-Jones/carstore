import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Logo from "../ui/logo";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex font-robotoserif justify-between items-center py-5 bg-brandLightest border-t-[0.5rem] border-t-brandMain border-b-brandMain border-b-[0.08rem] px-10">
      <div className="justify-self-start flex-3">
        <Link href="/">
          <Logo />
        </Link>
        {/* <h1 className="text-[#DB6959] font-extrabold text-[2rem]">CAZOO</h1> */}
      </div>
      <div className="flex-4">
        <ul className="flex justify-around font-semibold">
          <li>Buy</li>
          <li>Finance</li>
          <li>Sell</li>
          <li>Car care</li>
          <li>About Cazoo</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="flex flex-3 justify-end">
        <AiFillHeart className="mr-8" />
        <FaUserAlt />
      </div>
    </div>
  );
};

export default NavBar;
