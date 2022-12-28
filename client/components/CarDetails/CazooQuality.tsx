import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const CazooQuality = () => {
  return (
    <div>
      <div className="bg-brandLightest p-8 flex justify-center mt-16">
        <div className="w-4/5">
          <h1 className="text-[32px] text-center font-semibold mt-6 ">
            Cazoo quality
          </h1>
          <div className="flex justify-center mt-3">
            <p className="text-textPrimary text-center w-[60%]">
              Every used Cazoo car has been thoroughly inspected and fully
              reconditioned, so you can be completely confident about its
              condition and safety.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="font-semibold text-[20px] mb-6">
              We guarantee that every used car has:
            </h2>
            <div className="grid grid-cols-2 gap-x-28">
              <div className="flex items-center border-b border-borderMain py-4">
                <AiFillCheckCircle className="text-[1.5rem] text-successMain mr-4" />
                <p className="text-textPrimary">
                  Passed our thorough
                  <strong className="ml-2 text-primaryMain">
                    300 point inspection
                  </strong>
                </p>
              </div>
              <div className="flex items-center border-b border-borderMain py-4">
                <AiFillCheckCircle className="text-[1.5rem] text-successMain mr-4" />
                <p className="text-textPrimary">
                  Been reconditioned to our high standards
                </p>
              </div>
              <div className="flex items-center border-b border-borderMain py-4">
                <AiFillCheckCircle className="text-[1.5rem] text-successMain mr-4" />
                <p className="text-textPrimary">
                  Had a recent service or MOT, if required
                </p>
              </div>
              <div className="flex items-center border-b border-borderMain py-4">
                <AiFillCheckCircle className="text-[1.5rem] text-successMain mr-4" />
                <p className="text-textPrimary">
                  Photos of imperfections, if needed
                </p>
              </div>
              <div className="flex items-center border-b border-borderMain py-4">
                <AiFillCheckCircle className="text-[1.5rem] text-successMain mr-4" />
                <p className="text-textPrimary">A minimum of 3mm tyre treads</p>
              </div>
              <div className="flex items-center border-b border-borderMain py-4">
                <AiFillCheckCircle className="text-[1.5rem] text-successMain mr-4" />
                <p className="text-textPrimary">
                  Completed a road test by our technicians
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="py-8 w-4/5">
          <h1 className="text-[2.25rem] text-center font-semibold mb-10">
            Included with our cars
          </h1>
          <div className="flex">
            <div className="flex flex-col items-center">
              <AiFillCheckCircle className="text-[6rem] text-successMain mb-12" />
              <p className="text-center">
                Free collection and a full refund within the first 7 days if you
                don’t love your car.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiFillCheckCircle className="text-[6rem] text-successMain mb-12" />
              <p className="text-center">
                Free collection and a full refund within the first 7 days if you
                don’t love your car.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiFillCheckCircle className="text-[6rem] text-successMain mb-12" />
              <p className="text-center">
                Free collection and a full refund within the first 7 days if you
                don’t love your car.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brandLightest flex justify-center mt-16 py-10">
        <div className="w-4/5">
          <h1 className="text-[36px] font-semibold text-center mb-8">
            Optional extras with your purchase
          </h1>
          <div className="grid grid-cols-3 gap-x-10">
            <div>
              <div className="flex flex-col justify-between h-[400px]">
                <Image
                  className="object-cover h-[214px] rounded-md"
                  src="https://www.cazoo.co.uk/static/car-details/cazoo-cover-creative.jpg"
                  width="352"
                  height="225"
                  alt="extended"
                />
                <h2 className="text-[24px] font-semibold text-textPrimary">
                  Extended Warranty
                </h2>
                <p className="text-textPrimary">
                  CazooCover Extended Warranty protects you from unexpected
                  costs after your car warranty has ended.
                </p>
                <a href="#" className="text-primaryMain font-bold">
                  Learn more
                </a>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between h-[400px]">
                <Image
                  className="object-cover h-[214px] rounded-md"
                  src="https://www.cazoo.co.uk/static/car-details/cazoo-guard-creative_v2.jpg"
                  width="352"
                  height="225"
                  alt="extended"
                />
                <h2 className="text-[24px] font-semibold text-textPrimary">
                  Paint & Fabric Protection
                </h2>
                <p>
                  Add CazooGuard Paint & Fabric Protection to your purchase in
                  checkout to keep your car looking its best.
                </p>
                <a href="#" className="text-primaryMain font-bold">
                  Learn more
                </a>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between h-[400px]">
                <Image
                  className="object-cover h-[214px] rounded-md"
                  src="https://www.cazoo.co.uk/static/car-details/cazoo-care-creative_v2.jpg"
                  width="352"
                  height="225"
                  alt="extended"
                />
                <h2 className="text-[24px] font-semibold text-textPrimary">
                  Service Plan
                </h2>
                <p>
                  Cover the costs of your future services with a CazooPlan
                  Service Plan. You’ll also get a free yearly MOT.
                </p>
                <a href="#" className="text-primaryMain font-bold">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CazooQuality;
