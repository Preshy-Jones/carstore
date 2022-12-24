import React from "react";
import { BiEnvelope } from "react-icons/bi";

const ResultInfo = () => {
  return (
    <div className="flex items-center">
      <h2 className="mr-4">1 - 47 of 8,328 results</h2>
      <button className="flex items-center border border-black py-2 px-2 rounded-md">
        <BiEnvelope className="mr-3 text-[1.5rem]" />
        <h2 className="font-semibold">Create alert</h2>
      </button>
    </div>
  );
};

export default ResultInfo;
