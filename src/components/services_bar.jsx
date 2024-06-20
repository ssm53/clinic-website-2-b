import React from "react";
import { PiStethoscopeLight } from "react-icons/pi";
import { PiGreaterThanLight } from "react-icons/pi";

const ServicesBar = () => {
  return (
    <div className="flex justify-between h-[136px] w-[100%] bg-[#B0B3B8]">
      <div className="px-8 py-4 flex flex-col justify-center">
        <h1 className="text-3xl">Services</h1>
        <p className="flex items-center pt-2 text-[#2A2D36] text-[12px]">
          Home
          <span className="px-2 color-[#2A2D36]">
            <PiGreaterThanLight />
          </span>
          Services
        </p>
      </div>
      <div className="pr-10 py-4 ">
        <PiStethoscopeLight className="text-8xl" color="#2A2D36" />
      </div>
    </div>
  );
};

export default ServicesBar;
