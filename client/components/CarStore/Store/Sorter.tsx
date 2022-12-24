import React from "react";

const Sorter = () => {
  return (
    <div className="flex items-center">
      <h3 className="mr-3">Sort by</h3>
      <select name="" className="py-3 px-4 border border-[#ACBEB1] rounded-md">
        <option value="">Featured</option>
        <option value="">Recently added</option>
        <option value="">Highest Price</option>
        <option value="">Lowest Price</option>
        <option value="">Newest age</option>
        <option value="">Oldest age</option>
        <option value="">Highest mileage</option>
        <option value="">Lowest mileage</option>
      </select>
    </div>
  );
};

export default Sorter;
