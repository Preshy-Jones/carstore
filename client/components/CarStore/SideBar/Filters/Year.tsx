import React from "react";

const Year = () => {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-3 justify-between items-center">
        <h3 className="mr-4 text-[14px]">From</h3>
        <select className="w-full py-3 px-4 border border-[#ACBEB1] rounded-md col-start-2 col-end-4">
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
      <div className="justify-between items-center mt-4 grid grid-cols-3">
        <h3 className="mr-4 text-[14px] col-start-1 col-end-2">To</h3>
        <select
          className="w-full py-3 px-4 border border-[#ACBEB1] rounded-md col-start-2 col-end-4"
          disabled={true}
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

export default Year;
