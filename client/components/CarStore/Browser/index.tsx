import React from "react";
import { TbH1 } from "react-icons/tb";
import {
  byLocationData,
  byPopularMakesData,
  byPopularModelData,
  byTypeData,
} from "./BrowserContent";

const Browser = () => {
  return (
    <div className="bg-brandLightest mt-14 p-[3.5rem]">
      <div>
        <h1 className="text-[2.25rem] text-textPrimary text-center font-semibold">
          Browse by popular makes
        </h1>
        <div className="grid grid-cols-3 mt-6 justify-items-center gap-y-2">
          {byPopularMakesData.map((data, index) => (
            <h3 key={index} className="text-primaryMain font-semibold">
              {data}
            </h3>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-[2.25rem] text-textPrimary text-center font-semibold">
          Browse by popular model
        </h1>
        <div className="grid grid-cols-3 mt-6 justify-items-center gap-y-2">
          {byPopularModelData.map((data, index) => (
            <h3 key={index} className="text-primaryMain font-semibold">
              {data}
            </h3>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-[2.25rem] text-textPrimary text-center font-semibold">
          Browse by type
        </h1>
        <div className="grid grid-cols-3 mt-6 justify-items-center gap-y-2">
          {byTypeData.map((data, index) => (
            <h3 key={index} className="text-primaryMain font-semibold">
              {data}
            </h3>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-[2.25rem] text-textPrimary text-center font-semibold">
          Browse by location
        </h1>
        <div className="grid grid-cols-3 mt-6 justify-items-center gap-y-2">
          {byLocationData.map((data, index) => (
            <h3 key={index} className="text-primaryMain font-semibold">
              {data}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browser;
