import React from "react";

const page = () => {
  return (
    <div className="relative p-[20px] pt-[40px]">
      <div className="max-w-container-lg mx-auto">
        <div className="w-full h-[380px] bg-black/10 mb-[40px]"></div>
        <div className="grid grid-cols-3 gap-x-[20px] gap-y-[20px]">
          <div className="w-full h-[300px] bg-black/10 rounded-[8px]"></div>
          <div className="w-full h-[300px] bg-black/10 rounded-[8px]"></div>
          <div className="w-full h-[300px] bg-black/10 rounded-[8px]"></div>
          <div className="w-full h-[300px] bg-black/10 rounded-[8px]"></div>
          <div className="w-full h-[300px] bg-black/10 rounded-[8px]"></div>
          <div className="w-full h-[300px] bg-black/10 rounded-[8px]"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
