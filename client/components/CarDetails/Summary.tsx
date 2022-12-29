import Image from "next/image";
import React from "react";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbAlertCircle } from "react-icons/tb";
import { MOTIcon, ShieldIcon } from "../ui/icons";
import { summaryDummyData } from "./DetailsContent";

const Summary = () => {
  return (
    <div className="mt-16">
      <h1 className="text-[36px] font-semibold mb-5">Summary</h1>
      <div className="flex">
        <div className="w-[50%] flex justify-between">
          <div>
            <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
              <MOTIcon />
            </div>
            <h2 className="mt-2 font-semibold">Last MOT</h2>
            <div className="flex flex-col text-[14px] text-textPrimary mt-">
              <span>13 May 2022 </span>
              <span>45,999 miles</span>
            </div>
          </div>
          <div>
            <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
              <RxCounterClockwiseClock />
            </div>
            <h2 className="mt-2 font-semibold">Last Service</h2>
            <div className="flex flex-col text-[14px] text-textPrimary mt-">
              <span>13 May 2022 </span>
              <span>45,999 miles</span>
            </div>
          </div>
          <div>
            <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
              <ShieldIcon />
            </div>
            <h2 className="mt-2 font-semibold">Cazoo warranty</h2>
            <div className="flex flex-col text-[14px] text-textPrimary mt-">
              <span>90-day warranty and </span>
              <span>RAC roadside assistance included</span>
            </div>
          </div>
        </div>
      </div>
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
      <div className="grid grid-cols-2 gap-y-1 divide-borderMain divide-y gap-x-8 mt-14">
        {summaryDummyData.map((data, index) => (
          <div key={index} className="flex py-4">
            <h2 className="mr-3">{data.title}</h2>
            <h2 className="font-semibold">{data.value}</h2>
          </div>
        ))}
      </div>
      <div>
        <div className=" px-4 py-5 rounded-sm w-1/2 mt-4 bg-backgroundDarker hover:bg-brandLight bg-opacity-10 flex ">
          <div className=" flex flex-col">
            <h3 className="">Get covered against unexpected repair costs.</h3>
            <p className="text-textSecondary">
              Add CazooCover Extended Warranty at checkout, from just
              £18.50/month.
            </p>
          </div>
          <TbAlertCircle className="text-[1.6rem] mr-3" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Summary;
