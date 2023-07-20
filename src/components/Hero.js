import React, { useState, useEffect } from "react";
import bgImage from "../assets/bg.jpg";
import { MdMoneyOff } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaRegHandshake, FaPassport, FaMoneyCheckAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div name="home" className="w-full h-[90vh] bg-zinc-200">
      <div className="w-full h-[90vh] absolute bg-black/30"></div>
      <img src={bgImage} alt="/" className="w-full h-full object-cover" />

      <div className="max-w-[1200px] m-auto">
        <div className="absolute top-[30%] w-full md:[50%] max-w-[700px] h-full flex flex-col text-white p-4">
          <h2 className="font-bold text-2xl py-3 italic">
            BEGIN YOUR JOURNEY.
          </h2>
          <h1 className="font-bold text-5xl">APPLY NOW TO STUDY IN THE UK</h1>
        </div>
      </div>
      <div
        className="absolute flex flex-col py-4 md:min-w-[760px] bottom-[2%]
  mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100
  border border-slate-300 rounded-xl text-center shadow-xl"
      >
        <div className="flex justify-between flex-wrap px-4">
          <p className="px-4 py-2 text-slate-500">
            <MdMoneyOff className="text-blue-800 mx-auto mb-3" size={35} />
            No-fee Service
          </p>
          <p className="px-4 py-2 text-slate-500">
            <SlCalender className="text-blue-800 mx-auto mb-3" size={35} />
            Local Events
          </p>
          <p className="px-4 py-2 text-slate-500">
            <HiOutlineOfficeBuilding
              className="text-blue-800 mx-auto mb-3"
              size={35}
            />
            Regional Offices
          </p>
          <p className="px-4 py-2 text-slate-500">
            <FaRegHandshake className="text-blue-800 mx-auto mb-3" size={35} />
            50+ Partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
