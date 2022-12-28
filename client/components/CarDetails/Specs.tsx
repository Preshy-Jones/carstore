import React from "react";
import {
  BootSpaceIcon,
  CarArrowIcon,
  EngineIcon,
  FuelCapacityIcon,
  SpeedMeterIcon,
} from "../ui/icons";

const Specs = () => {
  return (
    <div className="mt-16">
      <h1 className="text-[36px] font-semibold mb-5">Specs</h1>
      <p>
        The specification listed was standard for this model when supplied new.
        The exact specification of this car may be different and buyers are
        advised to view the full images provided on our website to ensure that
        the vehicle meets their requirements.
      </p>
      <div className="flex justify-between mt-8">
        <div>
          <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
            <SpeedMeterIcon />
          </div>
          <h2 className="mt-2 font-semibold">Top Speed</h2>
          <div className="flex flex-col text-[14px] text-textPrimary mt-">
            <span>105 mph </span>
          </div>
        </div>
        <div>
          <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
            <SpeedMeterIcon />
          </div>
          <h2 className="mt-2 font-semibold">Acceleration</h2>
          <div className="flex flex-col text-[14px] text-textPrimary mt-">
            <span>13.7 seconds </span>
          </div>
        </div>
        <div>
          <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
            <EngineIcon />
          </div>
          <h2 className="mt-2 font-semibold">Engine Power</h2>
          <div className="flex flex-col text-[14px] text-textPrimary mt-">
            <span>79 bhp </span>
          </div>
        </div>
        <div>
          <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
            <CarArrowIcon />
          </div>
          <h2 className="mt-2 font-semibold">Length</h2>
          <div className="flex flex-col text-[14px] text-textPrimary mt-">
            <span>79 bhp </span>
          </div>
        </div>
        <div>
          <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
            <FuelCapacityIcon />
          </div>
          <h2 className="mt-2 font-semibold">Fuel tank capacity</h2>
          <div className="flex flex-col text-[14px] text-textPrimary mt-">
            <span>41 litres </span>
          </div>
        </div>
        <div>
          <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
            <BootSpaceIcon />
          </div>
          <h2 className="mt-2 font-semibold">Boot space</h2>
          <div className="flex flex-col text-[14px] text-textPrimary mt-">
            <span>265 litres</span>
          </div>
        </div>
      </div>
      <button className="font-semibold bg-white hover:bg-backgroundDarker hover:bg-opacity-10 mt-6 border border-backgroundDarker py-[0.6875rem] px-[0.9375rem] rounded-md">
        View all specs
      </button>
      <div className=" px-6 py-5 rounded-md mt-16 bg-brandLightest flex ">
        <p className="text-textPrimary w-[60%]">
          <strong>Want to part exchange your car?</strong> A quick and easy way
          to help pay for your next car. Get an instant valuation and we’ll
          provide our best offer, haggle-free.
        </p>
        <div className="flex items-center w-[40%]">
          <div className="flex items-center w-[60%] mr-3">
            <p className="bg-backgroundDarker text-white py-2.5 px-2 rounded-l-md font-bold">GB</p>
            <input type="text" className="  py-[0.6875rem] placeholder-gray-500 placeholder:font-bold placeholder:text-[22px] pl-4" placeholder="ENTER REG" />
          </div>
          <button className="font-semibold bg-backgroundDarker text-white border border-backgroundDarker py-[0.6875rem] px-[0.9375rem] rounded-md w-[40%]">
            Start valuation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specs;
