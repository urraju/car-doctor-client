import React from "react";
import { FcOvertime, FcCallback } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
const Info = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className="flex rounded-lg flex-col px-10 md:flex-row gap-10 justify-center md:justify-around font-hebo; py-16   bg-black">
        <div className="flex items-center gap-4">
          <FcOvertime className="text-5xl" />
          <div className=" text-white">
            <p className="font-light text-sm">We are open monday-friday</p>
            <p className="font-semibold text-xl">7:00 - 9:00</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FcCallback className="text-5xl" />
          <div className="text-white">
            <p className="font-light text-sm">Have a question?</p>
            <p className="font-semibold text-xl">+880 1824526072</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MdLocationOn className="text-5xl text-[#FF3811]" />
          <div className="text-white">
            <p className="font-light text-sm">Need a repair? our address</p>
            <p className="font-semibold text-xl">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
