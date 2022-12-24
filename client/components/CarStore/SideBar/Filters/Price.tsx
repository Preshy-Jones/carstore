import React from "react";

const Price = () => {
  return (
    <div className="mb-6">
      <p className="text-[14px] border border-neutralGreyLight p-4 mb-4">
        Find out if you're eligible for car finance in minutes, with no impact
        on your credit score.{" "}
        <span className="text-primaryMain font-bold ">
          Check your eligibility
        </span>
      </p>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="text-[14px]">From</label>
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
        <div>
          <label className="text-[14px]">To</label>
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
      </div>
    </div>
  );
};

export default Price;
