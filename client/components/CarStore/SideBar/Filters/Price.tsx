import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import Select from "../../../ui/select";

const Price = () => {
  const dispatch = useAppDispatch();
  const { isLoading, filter, models } = useAppSelector((state) => state.car);
  const prices = [
    5000, 7500, 10000, 12500, 15000, 17500, 20000, 25000, 30000, 35000, 40000,
    45000, 50000,
  ];

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    priceType: string
  ) => {
    console.log(e.target.value);
    const option = e.target.value;
    dispatch(
      getCars({
        model: filter.model ? filter.model : "",
        make: filter.make ? filter.make : "",
        minYear: filter.minYear ? filter.minYear : "",
        maxYear: filter.maxYear ? filter.maxYear : "",
        minPrice: priceType === "min" ? parseInt(option) : filter.minPrice,
        maxPrice: priceType === "max" ? parseInt(option) : filter.maxPrice,
      })
    );
  };

  return (
    <div className="mb-6">
      <p className="text-[14px] border border-neutralGreyLight p-4 mb-4">
        Find out if you're eligible for car finance in minutes, with no impact
        on your credit score.
        <span className="text-primaryMain font-bold ">
          Check your eligibility
        </span>
      </p>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="text-[14px]">From</label>
          <Select
            options={prices}
            onChange={(e) => handlePriceChange(e, "min")}
            priceYear="price"
          />
        </div>
        <div>
          <label className="text-[14px]">To</label>
          <Select
            options={prices}
            onChange={(e) => handlePriceChange(e, "max")}
            priceYear="price"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
