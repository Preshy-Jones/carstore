import React, { useEffect } from "react";
import { getCars } from "../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Car from "./Car";
import ResultInfo from "./ResultInfo";
import Sorter from "./Sorter";

const Store = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);

  const { cars } = useAppSelector((state) => state.car);

  return (
    <div>
      <div className="flex justify-between mt-6">
        <ResultInfo />
        <Sorter />
      </div>
      <div className="grid grid-cols-3 gap-x-[1.9rem]  gap-y-4 mt-6">
        {cars.map((car) => (
          <Car key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Store;
