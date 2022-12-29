import Image from "next/image";
import React from "react";
import { FaTruck } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { priceSplitter } from "../../utils/utilityFunctions";
import { CarIcon, GalleryIcon } from "../ui/icons";
import { Md360 } from "react-icons/md";
import { TbAlertCircle } from "react-icons/tb";
import { AiFillCheckCircle } from "react-icons/ai";
import { Car } from "../../types/car";

interface Props {
  carDetails: Car;
}

const CarSpecs: React.FC<Props> = ({ carDetails }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-12">
        <div className=" col-start-1 col-end-3">
          <div className="rounded-md">
            <Image
              src={carDetails.images[0]}
              alt="blah"
              width="761"
              height="417"
              className="rounded-md"
            />
          </div>
          <div className="grid grid-cols-3 gap-x-2 text-white justify-evenly mt-2">
            <button className="w-full bg-secondaryMain px-5 py-3 rounded-md flex items-center justify-center text-white">
              <div className="mr-3">
                <GalleryIcon />
              </div>
              <span>Gallery</span>
            </button>
            <button className="w-full bg-secondaryMain px-5 py-3 rounded-md flex items-center justify-center">
              <Md360 className="text-[1.6rem] mr-3" />
              <span>View 360</span>
            </button>
            <button className="w-full bg-secondaryMain px-5 py-3 rounded-md flex items-center justify-center">
              <TbAlertCircle className="text-[1.6rem] mr-3" />
              <span>Imperfections</span>
            </button>
          </div>
          <p className="text-[0.875rem] mt-10 mb-8">
            Finance representative example (HP): Total cash price £5,800.
            Borrowing £3,800 with a £2,000 deposit at a representative APR of
            9.92%, fixed interest rate per annum of 5.09%, 48 monthly payments
            of £95.29, £10 purchase fee, total cost of credit is £783.92, total
            amount payable is £6,583.92. Find out more T&C apply.
          </p>
          <div className="flex p-[1rem] bg-brandLightest  items-start mb-5">
            <AiFillCheckCircle className="text-[3.5rem] text-successMain relative bottom-4 mr-4" />

            <p className="">
              All our cars have been thoroughly inspected and fully
              reconditioned. As with any used car, you should expect some
              general wear and tear relative to the car’s age and mileage.{" "}
              <span className="text-primaryMain font-bold">
                Learn about our car quality standards
              </span>
            </p>
          </div>
        </div>
        <div className=" col-start-3 col-end-4">
          <h1 className="text-[36px] font-semibold">{carDetails.title}</h1>
          <h2 className="font-semibold text-[20px]">1.2 Visia (AC)</h2>
          <div className="font-semibold grid grid-cols-4a text-[14px] gap-x-2 gap-y-2">
            <span className="bg-brandLightest rounded-[0.3125rem] p-[0.5rem]">
              {carDetails.milleage} miles
            </span>
            <span className="bg-brandLightest rounded-[0.3125rem] p-[0.5rem]">
              {carDetails.year} reg
            </span>
            <span className="bg-brandLightest rounded-[0.3125rem] p-[0.5rem]">
              Manual
            </span>
            <span className="bg-brandLightest rounded-[0.3125rem] p-[0.5rem]">
              Petrol
            </span>
          </div>

          <div className="bg-brandLightest p-6 mt- rounded-sm">
            <div className="flex justify-between mt-4">
              <h3 className="font-semibold text-[22px]">
                £{priceSplitter(carDetails.price)}
              </h3>
              <div className="flex items-end">
                <h3 className="font-semibold text-[22px] m-0 p-0">
                  {carDetails.installment}
                </h3>
                <span className="text-[14px] mb-[0.1rem]">/month HP</span>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="border-b border-b-black mb-10 p-0 m-0 text-[14px] font-semibold"
              >
                Plus £49 admin fee
              </a>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="border-b border-b-black mb-10 p-0 m-0 text-[16px] font-bold"
              >
                View finance options
              </a>
            </div>
            <div className="flex mt-4">
              <button className="text-white border bg-primaryMain w-full font-bold text-[18.72px] py-[0.5rem] px-[1rem] rounded-md mr-4">
                Get started
              </button>
              <div className="border border-black flex justify-center items-center px-3 rounded-md">
                <FiHeart className="text-[1.3rem]" />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="flex justify-between mb-5">
              <div className="flex items-center">
                <FaTruck className="text-[1.6rem] mr-4" />
                <div>
                  <h2 className="text-sme">Delivery</h2>
                  <h2 className="text-sme">149</h2>
                </div>
              </div>
              <a className="underline font-semibold" href="#">
                Learn more
              </a>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-4">
                  <CarIcon />
                </div>
                <div>
                  <h2 className="text-sme">Collection</h2>
                  <h2 className="text-sme">FREE</h2>
                </div>
              </div>
              <a className="underline font-semibold" href="#">
                View centres
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSpecs;
