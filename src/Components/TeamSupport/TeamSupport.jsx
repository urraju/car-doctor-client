import React from "react";
import support1 from '../../assets/icons/group.png'
import support2 from '../../assets/icons/Group 38729.png'
import support3 from '../../assets/icons/person.png'
import support4 from '../../assets/icons/Wrench.png'
import support5 from '../../assets/icons/check.png'
import support6 from '../../assets/icons/deliveryt.png'
const TeamSupport = () => {
  return (
    <div className="mt-24 max-w-7xl mx-auto">
      <div className="text-center font-hebo space-y-5">
        <h1 className="text-[#FF3811] font-semibold text-lg">Core Features</h1>
        <h2 className="text-5xl font-bold">Why Choose Us</h2>
        <p className="text-gray-500 capitalize leading-8">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-2  md:grid-cols-4 lg:grid-cols-6">

      <div className="border rounded-md font-hebo inline-block p-4">
        <img className="mx-auto" src={support1} alt="" />
         <h1 className="mt-1 font-semibold text-center">Expert Team</h1>
      </div>
      <div className="border bg-[#FF3811] rounded-md font-hebo inline-block p-4">
        <img className="mx-auto" src={support2} alt="" />
         <h1 className="mt-1 font-semibold text-white text-center">Timely Delivery</h1>
      </div>
      <div className="border rounded-md font-hebo inline-block p-4">
        <img className="mx-auto" src={support3} alt="" />
         <h1 className="mt-1 font-semibold text-center">24/7 Support</h1>
      </div>
      <div className="border rounded-md font-hebo inline-block p-4">
        <img className="mx-auto" src={support4} alt="" />
         <h1 className="mt-1 font-semibold text-center">Best Equipment</h1>
      </div>
      <div className="border rounded-md font-hebo inline-block p-4">
        <img className="mx-auto" src={support5} alt="" />
         <h1 className="mt-1 font-semibold text-center">100% Guranty</h1>
      </div>
      <div className="border rounded-md font-hebo inline-block p-4">
        <img className="mx-auto" src={support6} alt="" />
         <h1 className="mt-1 font-semibold text-center">Timely Delivery</h1>
      </div>

      </div>
    </div>
  );
};

export default TeamSupport;
