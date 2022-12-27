import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import Select from "../../../ui/select";

const Year = () => {
  const dispatch = useAppDispatch();
  const { isLoading, filter, models } = useAppSelector((state) => state.car);

  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  const handleYearChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    yearType: string
  ) => {
    console.log(e.target.value);
    const option = e.target.value;
    dispatch(
      getCars({
        model: filter.model ? filter.model : "",
        make: filter.make ? filter.make : "",
        minYear: yearType === "min" ? option : filter.minYear,
        maxYear: yearType === "max" ? option : filter.maxYear,
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
      })
    );
  };

  return (
    <div className="mb-6">
      <div className="grid grid-cols-3 justify-between items-center">
        <h3 className="mr-4 text-[14px]">From</h3>
        <Select
          options={years}
          onChange={(e) => handleYearChange(e, "min")}
          priceYear="year"
        />
      </div>
      <div className="justify-between items-center mt-4 grid grid-cols-3">
        <h3 className="mr-4 text-[14px] col-start-1 col-end-2">To</h3>
        <Select
          options={years}
          onChange={(e) => handleYearChange(e, "max")}
          priceYear="year"
        />
      </div>
    </div>
  );
};

export default Year;
