import React, { useEffect, useState } from "react";
import { getCars, getModels } from "../../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CarMake, CarModel } from "../../../../types/car";
import Select from "../../../ui/select";

const MakeModel = () => {
  const dispatch = useAppDispatch();
  const { isLoading, filter, models } = useAppSelector((state) => state.car);
  const [makes, setMakes] = useState<CarMake[] | null | undefined>(null);

  const [modelTogged, setModelTogged] = React.useState(true);
  const handleChangeModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setModelTogged(true);
    } else {
      let model = models.find((model) => model.name === e.target.value);
      setMakes(model?.makes);
      setModelTogged(false);
    }

    const option = e.target.value;
    dispatch(
      getCars({
        model: option ? option : "",
        make: filter.make ? filter.make : "",
        year: filter.year ? filter.year : "",
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
      })
    );
  };

  const handleChangeMake = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    dispatch(
      getCars({
        model: filter.model ? filter.model : "",
        make: option ? option : "",
        year: filter.year ? filter.year : "",
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
      })
    );
  };

  // const modelOptions = [
  //   { value: "", label: "Any" },
  //   { value: "citroen", label: "Citroen" },
  //   { value: "dacia", label: "Dacia" },
  //   { value: "fiat", label: "Fiat" },
  //   { value: "ford", label: "Ford" },
  //   { value: "kia", label: "Kia" },
  //   { value: "seat", label: "Seat" },
  //   { value: "skoda", label: "Skoa" },
  //   { value: "toyota", label: "Citroen" },
  //   { value: "vauxhall", label: "Vauxhall" },
  //   { value: "volkswagen", label: "Volkswagen" },
  // ];

  return (
    <div className="mb-6">
      <div className="grid grid-cols-3 justify-between items-center">
        <h3 className="mr-4 text-[14px]">Make</h3>
        <Select options={models} onChange={handleChangeModel} />
      </div>
      <div className="justify-between items-center mt-4 grid grid-cols-3">
        <h3 className="mr-4 text-[14px] col-start-1 col-end-2">Model</h3>
        <Select
          options={makes}
          onChange={handleChangeMake}
          disabled={modelTogged}
        />
      </div>
    </div>
  );
};

export default MakeModel;
