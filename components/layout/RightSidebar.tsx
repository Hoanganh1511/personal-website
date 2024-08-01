import React from "react";
import { GrCertificate } from "react-icons/gr";
const RightSidebar = () => {
  return (
    <div className="sticky top-[90px] p-[20px]">
      <div>
        <div className="block  mb-[12px] text-[20px] font-semibold uppercase text-gray-500">
          Phổ biến
        </div>
        <div className="w-full h-[200px] bg-gray-200"></div>
        <div className="mt-4 w-full h-[200px] bg-gray-200"></div>
      </div>
      <div className="my-6" />
      <div>
        <div className="block mb-[12px] ">
          <div className="flex items-center ">
            <GrCertificate className="text-[24px] font-semibold text-gray-500 text-[20px] mr-2" />
            <span className="text-[20px] font-semibold uppercase text-gray-500">
              Certificates
            </span>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-4">
          <div className="bg-gray-200/80 px-[12px] py-[12px] rounded-[4px]">
            Certificate 1
          </div>
          <div className="bg-gray-200/80 px-[12px] py-[12px] rounded-[4px]">
            Certificate 2
          </div>
          <div className="bg-gray-200/80 px-[12px] py-[12px] rounded-[4px]">
            Certificate 3
          </div>
          <div className="bg-gray-200/80 px-[12px] py-[12px] rounded-[4px]">
            Certificate 4
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSidebar;
