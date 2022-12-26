import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import Select from "../../../ui/select";

const MakeModel = () => {
  const dispatch = useAppDispatch();
  const { isLoading, filter } = useAppSelector((state) => state.car);

  const [modelTogged, setModelTogged] = React.useState(true);
  const handleChangeModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setModelTogged(true);
    } else {
      setModelTogged(false);
    }
    dispatch(
      getCars({
        model: e.target.value,
        make: filter.make,
        year: filter.year,
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
      })
    );
  };

  const modelOptions = [
    { value: "", label: "Any" },
    { value: "citroen", label: "Citroen" },
    { value: "dacia", label: "Dacia" },
    { value: "fiat", label: "Fiat" },
    { value: "ford", label: "Ford" },
    { value: "kia", label: "Kia" },
    { value: "mercedes", label: "Mercedes" },
    { value: "seat", label: "Seat" },
    { value: "skoda", label: "Skoa" },
    { value: "Toyota", label: "Citroen" },
    { value: "vauxhall", label: "Vauxhall" },
    { value: "volkswagen", label: "Volkswagen" },
  ];

  return (
    <div className="mb-6">
      <div className="grid grid-cols-3 justify-between items-center">
        <h3 className="mr-4 text-[14px]">Make</h3>
        <Select options={modelOptions} onChange={handleChangeModel} />
      </div>
      <div className="justify-between items-center mt-4 grid grid-cols-3">
        <h3 className="mr-4 text-[14px] col-start-1 col-end-2">Model</h3>
        <select
          className="w-full py-3 px-4 border border-[#ACBEB1] rounded-md col-start-2 col-end-4"
          disabled={modelTogged}
        >
          <option value="">Any</option>
          <option value="citroen">Citroen</option>
          <option value="dacia">Dacia</option>
          <option value="fiat">Fiat</option>
          <option value="ford">Ford</option>
          <option value="kia">Kia</option>
          <option value="mercedes">Mercedes</option>
          <option value="seat">Seat</option>
          <option value="skoda">Skoda</option>
          <option value="Toyota">Citroen</option>
          <option value="vauxhall">Vauxhall</option>
          <option value="volkswagen">Volkswagen</option>
        </select>
      </div>
    </div>
  );
};

export default MakeModel;
