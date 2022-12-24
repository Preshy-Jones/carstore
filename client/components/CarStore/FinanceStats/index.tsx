import React from "react";
import financeContent from "./financeContent";

const FinanceStats = () => {
  return (
    <div className="bg-brandLightest py-[1rem] px-[2rem] mt-5">
      <h2>Finance representative example (PCP)</h2>
      <h2 className="mb-3">
        Total cash price £18,725. Borrowing £16,725 with a £2,000 deposit at a
        representative APR of 9.9%.
      </h2>
      <div className="grid grid-cols-7 ">
        {financeContent.map((item, index) => (
          <div
            key={index}
            className="border-r-brandMain border-r border-l border-l-brandMain border-solid flex flex-col items-center justify-between text-[12px] "
          >
            <dt className="text-center ">{item.title}</dt>
            <h2 className=" font-black">{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceStats;
