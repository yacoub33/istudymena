import React, { useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import firstLogo from "../assets/unis/1.png";
import secondLogo from "../assets/unis/2.png";
import thirdLogo from "../assets/unis/3.png";
import fourthLogo from "../assets/unis/4.png";
import fifthLogo from "../assets/unis/5.png";
import sixthLogo from "../assets/unis/6.png";
import seventhLogo from "../assets/unis/7.png";
import eighthLogo from "../assets/unis/8.png";
import ninthLogo from "../assets/unis/9.png";
import tenthLogo from "../assets/unis/10.png";
import eleventhLogo from "../assets/unis/11.png";
import twelfthLogo from "../assets/unis/12.png";
import thirteenthLogo from "../assets/unis/13.png";
import fourteenthLogo from "../assets/unis/14.png";

const Partners = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  return (
    <div name="partners" className="w-full my-32 px-2">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-10">
          Some of the Universities we work with
        </h2>
        <div className="relative flex items-center group px-2">
          <MdChevronLeft
            size={40}
            onClick={slideLeft}
            className="left-0 bg-black text-white rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-2 "
          />
          <div
            id={"slider"}
            className="flex py-4 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <img
              src={firstLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={secondLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={thirdLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={fourthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={fifthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={sixthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={seventhLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={eighthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={ninthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={tenthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={eleventhLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={twelfthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={thirteenthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
            <img
              src={fourteenthLogo}
              alt="University Logo"
              className="w-auto h-20 mx-2"
            />
          </div>
          <MdChevronRight
            size={40}
            onClick={slideRight}
            className="right-0  bg-black text-white rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
