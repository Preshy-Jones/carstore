import Image from "next/image";
import React from "react";
import { TbAlertCircle } from "react-icons/tb";

const Features = () => {
  return (
    <div className="mt-16">
      <h1 className="text-[36px] font-semibold mb-5">Features</h1>
      <p>
        This information was collected from available data, so some of the exact
        features and options may vary.
      </p>
      <div className="mt-4 flex justify-between">
        <Image
          src="https://res.cloudinary.com/xxolcare/image/upload/v1671812544/carzoo/fiat500ash_yjy11s.webp"
          alt="blah"
          width="272"
          height="153"
          className="rounded-md"
        />
        <Image
          src="https://res.cloudinary.com/xxolcare/image/upload/v1671812544/carzoo/fiat500ash_yjy11s.webp"
          alt="blah"
          width="272"
          height="153"
          className="rounded-md"
        />
        <Image
          src="https://res.cloudinary.com/xxolcare/image/upload/v1671812544/carzoo/fiat500ash_yjy11s.webp"
          alt="blah"
          width="272"
          height="153"
          className="rounded-md"
        />
        <Image
          src="https://res.cloudinary.com/xxolcare/image/upload/v1671812544/carzoo/fiat500ash_yjy11s.webp"
          alt="blah"
          width="272"
          height="153"
          className="rounded-md"
        />
      </div>
      <div>
        <div className=" px-4 py-5 rounded-sm w-1/2 mt-4 bg-backgroundDarker hover:bg-brandLight bg-opacity-10 flex justify-between">
          <div className=" flex flex-col w-4/5 ">
            <h3 className="">Keep your car looking its best for longer.</h3>
            <p className="text-textSecondary text-[14px]">
              Add our CazooGuard Paint & Fabric protection at checkout, in a
              one-off payment of £249.
            </p>
          </div>
          <TbAlertCircle className="text-[1.6rem] mr-3" />
        </div>
        <div></div>
      </div>
      <button className="font-semibold bg-white hover:bg-backgroundDarker hover:bg-opacity-10 mt-6 border border-backgroundDarker py-[0.6875rem] px-[0.9375rem] rounded-md">
        View all 40 features
      </button>
    </div>
  );
};

export default Features;
