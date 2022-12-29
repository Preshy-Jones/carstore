import Image from "next/image";
import React from "react";
import client from "../../api/client";
import CarSpecs from "../../components/CarDetails/CarSpecs";
import CazooQuality from "../../components/CarDetails/CazooQuality";
import Faq from "../../components/CarDetails/Faq";
import Features from "../../components/CarDetails/Features";
import PurchaseFlow from "../../components/CarDetails/PurchaseFlow";
import RunningCosts from "../../components/CarDetails/RunningCosts";
import ServiceHistory from "../../components/CarDetails/ServiceHistory";
import Specs from "../../components/CarDetails/Specs";
import Summary from "../../components/CarDetails/Summary";
import DefaultLayout from "../../components/layouts/DefaultLayout";

const CarDetails = ({ carDetails }: any) => {
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
          <CarSpecs carDetails={carDetails} />
          <PurchaseFlow />
          <Summary />
          <Features />
          <Specs />
          <RunningCosts />
          <ServiceHistory />
        </div>
      </div>
      <CazooQuality />
      <Faq />
    </DefaultLayout>
  );
};

export default CarDetails;

export async function getServerSideProps({ params: { id } }: any) {
  const data = await client().get(`/cars/car/${id}`);
  // console.log(data);
  const carDetails = data.data.car;
  return {
    props: {
      carDetails: carDetails,
    },
  };
}
