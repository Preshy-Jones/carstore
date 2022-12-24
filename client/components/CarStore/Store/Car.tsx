import Image from "next/image";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { Car } from "../../../types/car";

interface Props {
  car: Car;
}

const Car: React.FC<Props> = ({ car }) => {
  return (
    <div className=" shadow-cardShadow pb-4 rounded-md">
      <Image src={car.images[0]} alt={car.title} width="325" height="182" />
      <div className="px-4">
        <div className="flex justify-between my-4">
          <h3 className="font-semibold">{car.title}</h3>
          <FiHeart />
        </div>
        <h3 className="mb-3">{car.name}</h3>
        <div className="font-semibold grid grid-cols-3a gap-x-2 gap-y-2">
          <span className="bg-brandLightest rounded-[0.3125rem] p-[0.5rem]">
            {car.milleage} miles
          </span>
          <span className="bg-brandLightest rounded-[0.3125rem] p-[0.5rem]">
            {car.year} reg
          </span>{" "}
          <span className="bg-brandLightest rounded-[0.3125rem] p-[0.5rem]">
            Manual
          </span>{" "}
          <span className="bg-brandLightest rounded-[0.3125rem] p-[0.5rem]">
            Petrol
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <h3 className="font-semibold text-[22px]">£{car.price}</h3>
          <div className="flex items-end">
            <h3 className="font-semibold text-[22px] m-0 p-0">
              £{car.installment}
            </h3>
            <span className="text-[14px] mb-[0.1rem]">/month HP</span>
          </div>
        </div>

        <div className="mt-4">
          <a href="#" className="border-b border-b-black mb-10 p-0 m-0">
            Plus £49 admin fee
          </a>
        </div>

        <div className="mt-4">
          <button className="text-primaryMain border border-primaryMain w-full font-bold text-[18.72px] py-[0.75rem] px-[1rem] rounded-md">
            View this car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Car;
