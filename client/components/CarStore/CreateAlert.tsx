import React from "react";
import { HiEnvelope } from "react-icons/hi2";

const CreateAlert = () => {
  return (
    <div className="bg-brandLightest p-12 flex flex-col items-center rounded-md mt-10">
      <h1 className="text-[1.5rem] font-semibold  text-textPrimary mt-4">
        Can't find what you're looking for?
      </h1>
      <p className="text-textPrimary mb-6">Create a personalised stock alert</p>
      <button className="flex items-center border bg-primaryMain text-white py-2 px-2 rounded-md">
        <HiEnvelope className="mr-3 text-[1.5rem]" />
        <h2 className="font-semibold">Create alert</h2>
      </button>
    </div>
  );
};

export default CreateAlert;
