import React from "react";
import { FuelCapacityIcon, InsuranceIcon, VehicleTaxIcon } from "../ui/icons";

const RunningCosts = () => {
  return (
    <div className="mt-16">
      <h1 className="text-[36px] font-semibold mb-5">Running costs</h1>
      <p>
        Running costs are the day-to-day costs of driving your car, such as
        fuel, servicing, insurance, and other expenses you might need to
        consider. Please note that the costs shown here are indicative and based
        on the estimated averages for this car..
      </p>
      <div className="flex mt-8">
        <div className="w-[50%] flex justify-between">
          <div>
            <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
              <VehicleTaxIcon />
            </div>
            <h2 className="mt-2 font-semibold">Vehicle tax</h2>
            <div className="flex flex-col text-[14px] text-textPrimary mt-">
              <span>£30/year </span>
            </div>
          </div>
          <div>
            <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
              <InsuranceIcon />
            </div>
            <h2 className="mt-2 font-semibold">Insurance</h2>
            <div className="flex flex-col text-[14px] text-textPrimary mt-">
              <span>Group 6 </span>
              <span>approx. £237/year</span>
            </div>
          </div>
          <div>
            <div className="bg-brandLight rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
              <FuelCapacityIcon />
            </div>
            <h2 className="mt-2 font-semibold">Fuel consumption</h2>
            <div className="flex flex-col text-[14px] text-textPrimary mt-">
              <span>56.50mpg</span>
              <span>approx. £25/week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningCosts;
