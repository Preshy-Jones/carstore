import React from "react";
import { purchaseFlowContent } from "./DetailsContent";

const PurchaseFlow = () => {
  return (
    <div className="bg-brandLightest px-6 py-6">
      <h1 className="font-semibold mb-8 text-[24px] text-center">How buying a Cazoo car works</h1>
      <div className="flex bg-">
        {purchaseFlowContent.map((flow, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="border-[3px] border-borderMain rounded-[50%] w-[50px] h-[50px] flex justify-center items-center font-semibold text-[32px] text-primaryMain">
              {index + 1}
            </p>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-semibold mb-1">{flow.title}</h3>
              <p className="text-[14px] text-center">{flow.description}</p>
              <h2 className="font-bold text-primaryMain mt-1">
                {flow.moreInfo}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseFlow;
