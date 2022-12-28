import React from "react";
import { TbAlertCircle } from "react-icons/tb";
import { PlusIcon } from "../../ui/icons";
import ServiceDetails from "./ServiceDetails";

const ServiceHistory = () => {
  return (
    <div className="mt-16">
      <h1 className="text-[36px] font-semibold mb-5">Service history</h1>
      <div className="">
        <p className="w-[60%]">
          The service history records we have for this car are shown below.{" "}
          <span className="text-primaryMain font-bold">
            Learn more about service history
          </span>
        </p>
        <div></div>
      </div>
      <div className="mt-12 mb-8">
        <ServiceDetails />
        <ServiceDetails />
      </div>
      <div className="">
        <div className=" px-4 py-5 rounded-md w-1/2 mt-4 bg-backgroundDarker hover:bg-brandLight bg-opacity-10 flex justify-between">
          <div className=" flex flex-col w-4/5">
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
    </div>
  );
};

export default ServiceHistory;
