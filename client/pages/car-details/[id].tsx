import Image from "next/image";
import React from "react";
import CarSpecs from "../../components/CarDetails/CarSpecs";
import Features from "../../components/CarDetails/Features";
import PurchaseFlow from "../../components/CarDetails/PurchaseFlow";
import RunningCosts from "../../components/CarDetails/RunningCosts";
import ServiceHistory from "../../components/CarDetails/ServiceHistory";
import Specs from "../../components/CarDetails/Specs";
import Summary from "../../components/CarDetails/Summary";
import DefaultLayout from "../../components/layouts/DefaultLayout";

const CarDetails = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center pt-6 font-robotoserif">
        <div className="w-4/5">
          <div className="flex mb-4">
            <h3 className="text-primaryMain font-semibold">Home</h3>
            <span className="text-primaryMain mx-4">|</span>
            <h3 className="font-semibold text-primaryMain">User cars</h3>
            <span className="text-primaryMain mx-4 ">|</span>
            <h3 className="font-semibold text-primaryMain">Nissan</h3>
            <span className="text-primaryMain mx-4">|</span>
            <h3 className="font-semibold text-primaryMain">Micra</h3>
          </div>
          <CarSpecs />
          <PurchaseFlow />
          <Summary />
          <Features />
          <Specs />
          <RunningCosts />
          <ServiceHistory />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CarDetails;