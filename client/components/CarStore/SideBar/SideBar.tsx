import React from "react";
import SideBarContent from "./sideBarContent";
import { RxChevronDown } from "react-icons/rx";

const SideBar = () => {
  return (
    <div className="  border-r-[0.1rem] border-r-borderMain font-robotoserif">
      <div>
        <div className="py-[1.5rem] px-[2rem] border-b border-b-borderMain">
          <h1 className="font-extrabold">Filters</h1>
        </div>
        <div>
          {SideBarContent.map((item, index) => (
            <div
              className="flex py-[1.5rem] px-[2rem] justify-between border-b border-b-borderMain"
              key={index}
            >
              <h1 className=" font-extrabold">{item.title}</h1>
              <RxChevronDown className="text-primaryMain text-[1.5rem] stroke-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
