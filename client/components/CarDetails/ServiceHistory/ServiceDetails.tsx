import React, { useState } from "react";
import { priceSplitter } from "../../../utils/utilityFunctions";
import { MinusIcon, PlusIcon } from "../../ui/icons";

const ServiceDetails = () => {
  const [infoOpen, setInfoOpen] = useState<Boolean>(false);

  return (
    <div className={`${infoOpen ? "border-b-primaryMain border-b pb-3" : ""}`}>
      <div
        className={`flex justify-between ${
          infoOpen ? "mb-3" : `border-b-borderMain border-b`
        } py-4`}
      >
        <h3>Service date</h3>
        <div className="flex">
          <h3 className="font-semibold mr-4">13/05/2022</h3>
          {infoOpen ? (
            <MinusIcon onClick={() => setInfoOpen(!infoOpen)} color="#D14532" />
          ) : (
            <PlusIcon onClick={() => setInfoOpen(!infoOpen)} color="#D14532" />
          )}
        </div>
      </div>
      {infoOpen && (
        <div>
          <div className="flex justify-between py-4 border-b border-b-brandLightest">
            <h3 className="">Mileage</h3>
            <div className="flex">
              <h3 className="font-semibold mr-10">{priceSplitter(45999)} miles</h3>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <h3>Service record format</h3>
            <div className="flex">
              <h3 className="font-semibold mr-10">Service document</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
